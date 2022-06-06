var firebaseConfig = {
    apiKey: "AIzaSyAA7MuIM2M5p32MrVBx3_dTAACebpqK89E",
    authDomain: "lets-chat-b6912.firebaseapp.com",
    projectId: "lets-chat-b6912",
    storageBucket: "lets-chat-b6912.appspot.com",
    messagingSenderId: "254767558891",
    appId: "1:254767558891:web:a712ee62a1d7cbcfa88eae"
  };


  function addRoom(){

    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
          purpose : "adding rooms"
    });
  
    localStorage.setItem("room_name", Room_name);
    window.location = "kwitter_page.html";
  
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Names -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML =+ row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function Logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location= "Index.html";
}
