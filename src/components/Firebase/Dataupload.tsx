import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


interface TagFields {
    Able: boolean;
    Bravo: boolean;
    Charley: boolean;
  }

interface FirestoreData {
  id: string;
  title: string;
  name: string;
  detail: string;
  tag: TagFields;
  time:string;
}

const firebaseConfig = {
  apiKey: "AIzaSyDs_OtpT-SRpgG14KVpfJgze7IebrPfK4c",
  authDomain: "monodeza1-ryukeitaro.firebaseapp.com",
  projectId: "monodeza1-ryukeitaro",
  storageBucket: "monodeza1-ryukeitaro.appspot.com",
  messagingSenderId: "46708738561",
  appId: "1:46708738561:web:9e1f187517fac6d6554e00",
  measurementId: "G-82L64NMR20"
};


export function useFirestoreUpload() {
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const [formData, setFormData] = useState<FirestoreData>({
        id: '',
        title: '',
        name: '',
        detail: '',
        time:'',
        tag: { Able: false, Bravo: false, Charley: false }
      });
  
    const uploadData = async (formData: FirestoreData) => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
  
        await setDoc(doc(db, 'posts', formData.id), {
            title: formData.title,
            name: formData.name,
            detail: formData.detail,
            tag: formData.tag,
            time:formData.time
          });
  
        setUploadStatus('Success');

        setFormData((prevData) => ({
            ...prevData,
            id: '',
            title: '',
            name: '',
            detail: '',
            time:'',
            tag: { Able: false, Bravo: false, Charley: false }
          }));

      } catch (error) {
        setUploadStatus('Error');
        console.error('Error uploading document:', error);
      }
    };
      return { formData, setFormData, uploadData, uploadStatus };
   
  }