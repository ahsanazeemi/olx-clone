import * as firebase from 'firebase';
import 'firebase/database'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyAp5TmvERkNa6CLmV05Di9bmJLcxvfa30U",
    authDomain: "ahsan-olx-clone.firebaseapp.com",
    databaseURL: "https://ahsan-olx-clone.firebaseio.com",
    projectId: "ahsan-olx-clone",
    storageBucket: "ahsan-olx-clone.appspot.com",
    messagingSenderId: "761429058056",
    appId: "1:761429058056:web:473ed36d909f6d6a17e7bd"
  };
  
  export const firebase_init=()=>{
    firebase.initializeApp(firebaseConfig);
  }