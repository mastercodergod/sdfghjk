
var firebaseConfig = {
    apiKey: "AIzaSyAA7MuIM2M5p32MrVBx3_dTAACebpqK89E",
    authDomain: "lets-chat-b6912.firebaseapp.com",
    projectId: "lets-chat-b6912",
    storageBucket: "lets-chat-b6912.appspot.com",
    messagingSenderId: "254767558891",
    appId: "1:254767558891:web:a712ee62a1d7cbcfa88eae"
  };

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code



//End code
 } });  }); }
getData();

function Logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location= "Index.html";
}

function send()
{
    msg = document.getElementById("msg").value;

    firebase.database().ref(Room_name).push({

        username:user_name,
        message:msg,
        likes:0
    })
}