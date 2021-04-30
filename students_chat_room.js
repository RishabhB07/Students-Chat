// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSnrVMqQFnoOv98zkgnZYnr9ZqC5eiAAQ",
    authDomain: "students-chat-b681e.firebaseapp.com",
    projectId: "students-chat-b681e",
    storageBucket: "students-chat-b681e.appspot.com",
    messagingSenderId: "317071195049",
    appId: "1:317071195049:web:67a72b48a5a27c0345a2b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();
