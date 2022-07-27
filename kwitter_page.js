//YOUR FIREBASE LINKS\
var  firebaseConfig = {
      apiKey: "AIzaSyC3OHXUpqoFRUNYXu_j8537FQDcoZUtdcM",
      authDomain: "kwitter-c678b.firebaseapp.com",
      projectId: "kwitter-c678b",
      databaseURL: "https://kwitter-c678b-default-rtdb.firebaseio.com",
      storageBucket: "kwitter-c678b.appspot.com",
      messagingSenderId: "546957514803",
      appId: "1:546957514803:web:251022e61ef2646b20eb46"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
var roomname=localStorage.getItem("roomname");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
message:msg,
like:0,
name:username

      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
