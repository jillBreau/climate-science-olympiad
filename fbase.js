import firebase from 'firebase';
  
var firebaseConfig = {
    apiKey: "AIzaSyCxrmIGRATB2lp_USsWeHfGkgOq_xpqyQA",
    authDomain: "climate-science-percentiles.firebaseapp.com",
    projectId: "climate-science-percentiles",
    storageBucket: "climate-science-percentiles.appspot.com",
    messagingSenderId: "418410088591",
    appId: "1:418410088591:web:895923857bcf056b5948fa",
    measurementId: "G-1VVL99HX19"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

export default db;