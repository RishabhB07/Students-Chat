//YOUR FIREBASE LINKS
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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value="";
}
