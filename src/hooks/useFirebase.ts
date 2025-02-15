import { auth, db } from '@/firebase/init';
  import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, writeBatch, setDoc, Timestamp } from 'firebase/firestore';
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { useToast } from "@/hooks/use-toast";

  const useFirebase = () => {
    const [user] = useAuthState(auth);
    const { toast } = useToast();

    const createCard = async (cardData: any, cardType: string) => {
      if (!user) return;

      try {
        const cardRef = doc(collection(db, `users/${user.uid}/cards`));
        const timestamp = Timestamp.now();
        const card = {
          id: cardRef.id,
          type: cardType,
          ...cardData,
          createdAt: timestamp,
          updatedAt: timestamp,
          creatorEmail: user.email,
        };
        await setDoc(cardRef, card);
        return card;
      } catch (error: any) {
        toast({
          title: 'Error creating card',
          description: error.message,
          variant: 'destructive',
        });
        throw error;
      }
    };

    const getAllCards = async () => {
      if (!user) return [];

      try {
        const querySnapshot = await getDocs(collection(db, `users/${user.uid}/cards`));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error: any) {
        toast({
          title: 'Error fetching cards',
          description: error.message,
          variant: 'destructive',
        });
        return [];
      }
    };

    const deleteCard = async (cardId: string) => {
      if (!user) return;

      try {
        await deleteDoc(doc(db, `users/${user.uid}/cards`, cardId));
      } catch (error: any) {
        toast({
          title: 'Error deleting card',
          description: error.message,
          variant: 'destructive',
        });
        throw error;
      }
    };

    const updateCard = async (cardId: string, cardData: any) => {
      if (!user) return;

      try {
        await updateDoc(doc(db, `users/${user.uid}/cards`, cardId), cardData);
      } catch (error: any) {
        toast({
          title: 'Error updating card',
          description: error.message,
          variant: 'destructive',
        });
        throw error;
      }
    };

    const bulkCreateCards = async (cardDataArray: any[]) => {
      if (!user) return;

      try {
        const batch = writeBatch(db);
        cardDataArray.forEach(cardData => {
          const cardRef = doc(collection(db, `users/${user.uid}/cards`));
          const timestamp = Timestamp.now();
          const card = {
            id: cardRef.id,
            type: cardData.type || 'basic',
            ...cardData,
            createdAt: timestamp,
            updatedAt: timestamp,
            creatorEmail: user.email,
          };
          batch.set(cardRef, card);
        });
        await batch.commit();
      } catch (error: any) {
        toast({
          title: 'Error bulk creating cards',
          description: error.message,
          variant: 'destructive',
        });
        throw error;
      }
    };

    const syncToFirebase = async (cards: any[]) => {
      if (!user) return;

      try {
        const batch = writeBatch(db);
        cards.forEach(card => {
          const cardRef = doc(collection(db, `users/${user.uid}/cards`, card.id));
          batch.set(cardRef, card);
        });
        await batch.commit();
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
        throw error;
      }
    };

    return {
      createCard,
      getAllCards,
      deleteCard,
      updateCard,
      bulkCreateCards,
      syncToFirebase
    };
  };

  export default useFirebase;
