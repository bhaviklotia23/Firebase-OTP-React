import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGSXys82qQMuEOwhXRx9YXt91nyLbqV_o",
  authDomain: "dev-bros-baff7.firebaseapp.com",
  projectId: "dev-bros-baff7",
  storageBucket: "dev-bros-baff7.appspot.com",
  messagingSenderId: "4305116888",
  appId: "1:4305116888:web:93f04f3663fa47d677c1ad",
  measurementId: "G-PB1GF3FPBN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
