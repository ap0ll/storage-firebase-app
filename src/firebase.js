import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCKJ_AVOZt9T2138AOhrH5542HRE5Ho8k0",
  authDomain: "storage-firebase-app-b2676.firebaseapp.com",
  projectId: "storage-firebase-app-b2676",
  storageBucket: "storage-firebase-app-b2676.appspot.com",
  messagingSenderId: "373372477355",
  appId: "1:373372477355:web:ddf8c18ddfb5f341507cee"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

// Initialize Firebase
/*
const firebaseApp= initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);*/
export  { auth, provider, db, storage,};