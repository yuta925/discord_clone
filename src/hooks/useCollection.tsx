import { useEffect, useState } from "react";
// import { collection, query } from "firebase/firestore/lite";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channel {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.forEach((doc) => {
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default useCollection;
