var firebaseConfig = {
      apiKey: "AIzaSyCwm0-3oAPLCL1yyaoUyHrcwWp5F1n5g9s",
      authDomain: "kwitter-f9f26.firebaseapp.com",
      databaseURL: "https://kwitter-f9f26-default-rtdb.firebaseio.com",
      projectId: "kwitter-f9f26",
      storageBucket: "kwitter-f9f26.appspot.com",
      messagingSenderId: "115223416589",
      appId: "1:115223416589:web:c34204a92ff65056d9aa44"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
