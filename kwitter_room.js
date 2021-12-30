
var firebaseConfig = {
      apiKey: "AIzaSyBhlrcp6VA5gnz7deNDUQPyYPeERdRZu0c",
      authDomain: "kwitter-app-839d9.firebaseapp.com",
      databaseURL: "https://kwitter-app-839d9-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-839d9",
      storageBucket: "kwitter-app-839d9.appspot.com",
      messagingSenderId: "298486406889",
      appId: "1:298486406889:web:c810c003d9f72c744b9a78"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
