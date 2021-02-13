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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send1() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like: 0
})
document.getElementById("msg").value = "";
}

function getData() {
firebase.database().ref("/" + room_name).on('value', function (snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function (childSnapshot) {
childKey = childSnapshot.key;
childData = childSnapshot.val();
 if (childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
row = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>" + message + "</h4><button class='btn btn-warning' id='" + 
firebase_message_id + "' value='" + 
like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
document.getElementById("output").innerHTML += row;
}
});
});
} //calling the function 
getData();

function updateLike(message_id){
button_id=message_id
likes=document.getElementById(button_id).value;
likes_in_number=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
like:likes_in_number
}
)
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}