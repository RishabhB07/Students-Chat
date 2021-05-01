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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="students_chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="students_chat_page.html";
}