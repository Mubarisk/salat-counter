import Firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYkOm2--w8mroxJZVQ5IpqFDTsMNcE2tg",
  authDomain: "salat-counter.firebaseapp.com",
  projectId: "salat-counter",
  storageBucket: "salat-counter.appspot.com",
  messagingSenderId: "256604904104",
  appId: "1:256604904104:web:2c0f84ff5df00cf7b1c09d",
  measurementId: "G-T3VR04KFQP"
};
export default Firebase.initializeApp(firebaseConfig);