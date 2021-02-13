var firebaseConfig = {
apiKey: "AIzaSyAfdoaYWo64jATY2UdCy5PytI6t7b4nLKo",
authDomain: "kwitter-d75e5.firebaseapp.com",
databaseURL: "https://kwitter-d75e5-default-rtdb.firebaseio.com",
projectId: "kwitter-d75e5",
storageBucket: "kwitter-d75e5.appspot.com",
messagingSenderId: "310230569228",
appId: "1:310230569228:web:46fc089a73a58f3d423929",
measurementId: "G-44KTBGFRMT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach
(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

});});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
console.log(name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}