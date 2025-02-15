// src/lib/Card.ts
  import { db } from '@/firebase/init';
  import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, Timestamp, setDoc } from 'firebase/firestore';

  class Card {
    constructor(
      public type: string,
      public question: string,
      public answer: string,
      public clozeText: string,
      public answers: { text: string; isCorrect: boolean }[] = [],
      public id?: string,
      public createdAt?: Timestamp,
      public updatedAt?: Timestamp,
      public creatorEmail?: string,
      public publicCard?: boolean
    ) {}

    static async create(userId: string, cardData: any, cardType: string) {
      const cardRef = doc(collection(db, `users/${userId}/cards`));
      const timestamp = Timestamp.now();
      const card = {
        id: cardRef.id,
        type: cardType,
        ...cardData,
        createdAt: timestamp,
        updatedAt: timestamp,
        creatorEmail: cardData.creatorEmail || null,
        publicCard: cardData.publicCard || false
      };
      return card;
    }

    static async getAll(userId: string) {
      const querySnapshot = await getDocs(collection(db, `users/${userId}/cards`));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    static async delete(userId: string, cardId: string) {
      await deleteDoc(doc(db, `users/${userId}/cards`, cardId));
    }

    static async update(userId: string, cardId: string, cardData: any) {
      await updateDoc(doc(db, `users/${userId}/cards`, cardId), cardData);
    }

    static createPreview(cardData: any, cardType: string) {
      return {
        type: cardType,
        ...cardData,
      };
    }

    static async bulkCreate(userId: string, cardDataArray: any[]) {
      const batch = writeBatch(db);
      cardDataArray.forEach(cardData => {
        const cardRef = doc(collection(db, `users/${userId}/cards`));
        const timestamp = Timestamp.now();
        const card = {
          id: cardRef.id,
          type: cardData.type || 'basic',
          ...cardData,
          createdAt: timestamp,
          updatedAt: timestamp,
          creatorEmail: cardData.creatorEmail || null,
          publicCard: cardData.publicCard || false
        };
        batch.set(cardRef, card);
      });
      await batch.commit();
    }

    static saveToLocalStorage(cards: any[]) {
      localStorage.setItem('ankiCards', JSON.stringify(cards));
    }

    static loadFromLocalStorage() {
      try {
        const storedCards = localStorage.getItem('ankiCards');
        return storedCards ? JSON.parse(storedCards) : [];
      } catch (error) {
        console.error('Error loading from local storage:', error);
        return [];
      }
    }
  }

  export default Card;
