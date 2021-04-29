// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBo7MZpwSR4RnqIWgFmp8kzVPqr3SIY2_M",
      authDomain: "students-chat-5f089.firebaseapp.com",
      projectId: "students-chat-5f089",
      storageBucket: "students-chat-5f089.appspot.com",
      messagingSenderId: "1084217709209",
      appId: "1:1084217709209:web:99cb46a0653100329cde08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
