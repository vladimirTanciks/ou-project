import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1gtmxj21eqmRF64hIkN5Z1lS5QSydeQU',
  authDomain: 'ou-project-da749.firebaseapp.com',
  projectId: 'ou-project-da749',
  storageBucket: 'ou-project-da749.appspot.com',
  messagingSenderId: '605439825649',
  appId: '1:605439825649:web:e60cde4d04cfc310687b50',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
