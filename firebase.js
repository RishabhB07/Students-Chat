// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBSnrVMqQFnoOv98zkgnZYnr9ZqC5eiAAQ",
  authDomain: "students-chat-b681e.firebaseapp.com",
  databaseURL: "https://students-chat-b681e-default-rtdb.firebaseio.com",
  projectId: "students-chat-b681e",
  storageBucket: "students-chat-b681e.appspot.com",
  messagingSenderId: "317071195049",
  appId: "1:317071195049:web:67a72b48a5a27c0345a2b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}