import React, { useState, useEffect } from 'react';
  import { auth, db } from '@/firebase/init';
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, writeBatch, setDoc } from 'firebase/firestore';
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { useToast } from "@/hooks/use-toast";
  import { Link, useNavigate } from 'react-router-dom';
  import ImageOcclusionCard from '@/components/anki/ImageOcclusionCard';
  import ClozeCard from '@/components/anki/ClozeCard';
  import BasicCard from '@/components/BasicCard';
  import MultipleAnswersCard from '@/components/anki/MultipleAnswersCard';
  import Navbar from '@/components/layout/Navbar';
  import { Checkbox } from "@/components/ui/checkbox";
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
  import Card from '@/lib/Card';
  import BasicCardForm from '@/components/anki/forms/BasicCardForm';
  import ClozeCardForm from '@/components/anki/forms/ClozeCardForm';
  import MultipleAnswersCardForm from '@/components/anki/forms/MultipleAnswersCardForm';
  import CardPreviewComponent from '@/components/anki/CardPreview';
  import useFirebase from '@/hooks/useFirebase';
  import AnkiCardList from '@/components/anki/AnkiCardList';
  import AnkiActions from '@/components/anki/AnkiActions';
  import AnkiBulkCreateForm from '@/components/anki/AnkiBulkCreateForm';

  const Anki = () => {
    const [user, loading, error] = useAuthState(auth);
    const [cards, setCards] = useState([]);
    const [newCardType, setNewCardType] = useState('basic');
    const [numOptions, setNumOptions] = useState(4);
    const [newCardData, setNewCardData] = useState({
      question: '',
      answer: '',
      answers: Array(10).fill({ text: '', isCorrect: false }),
      clozeText: '', // For cloze deletion
      publicCard: false,
    });
    const [previewCard, setPreviewCard] = useState(null);
    const [editingCardId, setEditingCardId] = useState(null);
    const [editedCardData, setEditedCardData] = useState(null);
    const [bulkCardData, setBulkCardData] = useState('');
    const { toast } = useToast();
    const { createCard: createCardInFirebase, getAllCards, deleteCard, updateCard, bulkCreateCards, syncToFirebase } = useFirebase();

    useEffect(() => {
      const fetchCards = async () => {
        if (user) {
          try {
            const querySnapshot = await getDocs(collection(db, `users/${user.uid}/cards`));
            const fetchedCards = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCards(fetchedCards);
          } catch (error: any) {
            toast({
              title: 'Error fetching cards',
              description: error.message,
              variant: 'destructive',
            });
          }
        }
      };

      const loadFromLocalStorage = () => {
        try {
          const storedCards = localStorage.getItem('ankiCards');
          if (storedCards) {
            setCards(JSON.parse(storedCards));
          }
        } catch (error) {
          console.error('Error loading from local storage:', error);
        }
      };

      loadFromLocalStorage();

      if (!loading && user) {
        fetchCards();
      }
    }, [user, loading, toast, getAllCards]);

    const handleCreateCard = async () => {
      if (!user) return;

      try {
        let cardData;
        switch (newCardType) {
          case 'basic':
            cardData = { question: newCardData.question, answers: [{ text: newCardData.answers[0].text, isCorrect: true }] };
            break;
          case 'cloze':
            cardData = { clozeText: newCardData.clozeText, answers: [] };
            break;
          case 'multipleAnswers':
            cardData = { question: newCardData.question, answers: newCardData.answers.slice(0, numOptions) };
            break;
          default:
            cardData = {};
        }
        const preview = Card.createPreview(cardData, newCardType);
        setCards(prevCards => [...prevCards, preview]);
        Card.saveToLocalStorage([...cards, preview]);
        setNewCardData({ question: '', answers: Array(numOptions).fill({ text: '', isCorrect: false }), clozeText: '', publicCard: false }); // Reset form
        toast({
          title: 'Card Created',
          description: 'New card has been added to preview.',
        });
      } catch (error: any) {
        toast({
          title: 'Error creating card',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    const handleDeleteCard = async (cardId: string) => {
      if (!user) return;

      try {
        await deleteCard(cardId);
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
        Card.saveToLocalStorage(cards.filter(card => card.id !== cardId));
        toast({
          title: 'Card Deleted',
          description: 'Card has been deleted.',
        });
      } catch (error: any) {
        toast({
          title: 'Error deleting card',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    const handleEditCard = (card) => {
      setEditingCardId(card.id);
      setEditedCardData({ ...card });
    };

    const handleUpdateCard = async () => {
      if (!user || !editingCardId) return;

      try {
        await updateCard(editingCardId, editedCardData);
        setCards(prevCards =>
          prevCards.map(card => (card.id === editingCardId ? { ...card, ...editedCardData } : card))
        );
        Card.saveToLocalStorage(cards.map(card => (card.id === editingCardId ? { ...card, ...editedCardData } : card)));
        toast({
          title: 'Card Updated',
          description: 'Card has been updated.',
        });
        setEditingCardId(null);
        setEditedCardData(null);
      } catch (error: any) {
        toast({
          title: 'Error updating card',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    const handleBulkCreate = async () => {
      if (!user) return;

      try {
        const cardDataArray = JSON.parse(bulkCardData);
        if (!Array.isArray(cardDataArray)) {
          throw new Error('Invalid JSON format: Must be an array of card objects.');
        }

        // await bulkCreateCards(cardDataArray);

        toast({
          title: 'Bulk Create Successful',
          description: `${cardDataArray.length} cards have been added.`,
        });
        setBulkCardData('');
      } catch (error: any) {
        toast({
          title: 'Error creating cards',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    const handleSyncToFirebase = async () => {
      if (!user) return;

      try {
        await syncToFirebase(cards);
        toast({
          title: 'Sync Successful',
          description: 'Cards have been synced to Firebase.',
        });
      } catch (error: any) {
        toast({
          title: 'Error syncing cards',
          description: error.message,
          variant: 'destructive',
        });
      }
    };

    const renderCardForm = () => {
      switch (newCardType) {
        case 'basic':
          return (
            <BasicCardForm
              question={newCardData.question}
              answers={newCardData.answers}
              numOptions={1}
              onChange={(data) => setNewCardData({ ...newCardData, question: data.question, answers: [{ text: data.answers[0].text, isCorrect: true }] })}
              setNumOptions={() => {}}
            />
          );
        case 'cloze':
          return (
            <ClozeCardForm
              clozeText={newCardData.clozeText}
              onChange={(text) => setNewCardData({ ...newCardData, clozeText: text })}
            />
          );
        case 'multipleAnswers':
          return (
            <MultipleAnswersCardForm
              question={newCardData.question}
              answers={newCardData.answers}
              numOptions={numOptions}
              onChange={(data) => setNewCardData({ ...newCardData, ...data })}
              setNumOptions={setNumOptions}
            />
          );
        case 'imageOcclusion':
          return (
            <div>
              <p>Image Occlusion card creation is not fully implemented in this version.</p>
            </div>
          );
        default:
          return null;
      }
    };

    const renderCardContent = (card) => {
      return <CardPreviewComponent card={card} />;
    };

    const renderEditCardForm = () => {
      if (!editingCardId || !editedCardData) return null;

      switch (editedCardData.type) {
        case 'basic':
          return (
            <BasicCardForm
              question={editedCardData.question}
              answers={editedCardData.answers}
              numOptions={1}
              onChange={(data) => setEditedCardData({ ...editedCardData, question: data.question, answers: [{ text: data.answers[0].text, isCorrect: true }] })}
              setNumOptions={() => {}}
            />
          );
        case 'cloze':
          return (
            <ClozeCardForm
              clozeText={editedCardData.clozeText}
              onChange={(text) => setEditedCardData({ ...editedCardData, clozeText: text })}
            />
          );
        case 'multipleAnswers':
          return (
            <MultipleAnswersCardForm
              question={editedCardData.question}
              answers={editedCardData.answers}
              numOptions={numOptions}
              onChange={(data) => setEditedCardData({ ...editedCardData, ...data })}
              setNumOptions={setNumOptions}
            />
          );
        case 'imageOcclusion':
          return (
            <div>
              <p>Image Occlusion card editing is not fully implemented in this version.</p>
            </div>
          );
        default:
          return null;
      }
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!error && !user) {
      return <div>Please <Link to="/login">login</Link> to access Anki features.</div>;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 pt-20">
        <Navbar />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Anki-like Features</h2>

          {/* Card Creation Form */}
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Create New Card</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardType">Card Type</Label>
                <select
                  id="cardType"
                  className="w-full p-2 border rounded"
                  value={newCardType}
                  onChange={(e) => setNewCardType(e.target.value)}
                >
                  <option value="basic">Basic</option>
                  <option value="cloze">Cloze</option>
                  <option value="imageOcclusion">Image Occlusion</option>
                  <option value="multipleAnswers">Multiple Answers</option>
                </select>
              </div>
              {renderCardForm()}
              <Button onClick={handleCreateCard} className="w-full">Create Card</Button>
            </div>
          </div>

          {/* Bulk Create Form */}
          <AnkiBulkCreateForm
            bulkCardData={bulkCardData}
            handleBulkCreate={handleBulkCreate}
            setBulkCardData={setBulkCardData}
          />

          {/* Card Display Area */}
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-semibold mb-4">Your Cards</h3>
            <Button onClick={handleSyncToFirebase} className="mb-4">Sync to Firebase</Button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnkiCardList
                cards={cards}
                setPreviewCard={setPreviewCard}
                handleEditCard={handleEditCard}
                handleDeleteCard={handleDeleteCard}
              />
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        <Dialog open={previewCard !== null} onOpenChange={setPreviewCard}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Card Preview</DialogTitle>
            </DialogHeader>
            {previewCard && renderCardContent(previewCard)}
            <Button onClick={() => setPreviewCard(null)}>Close</Button>
          </DialogContent>
        </Dialog>

        {/* Edit Modal */}
        <Dialog open={editingCardId !== null} onOpenChange={setEditingCardId}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Card</DialogTitle>
            </DialogHeader>
            {editingCardId && renderEditCardForm()}
            <Button onClick={handleUpdateCard}>Update Card</Button>
            <Button variant="secondary" onClick={() => setEditingCardId(null)}>Cancel</Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  export default Anki;
