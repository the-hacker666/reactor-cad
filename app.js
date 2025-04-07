// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhbQvxLwjLzgLgIrBT8E9YETAXv-4tPbg",
  authDomain: "reactor-cad.firebaseapp.com",
  databaseURL: "https://reactor-cad-default-rtdb.firebaseio.com",
  projectId: "reactor-cad",
  storageBucket: "reactor-cad.firebasestorage.app",
  messagingSenderId: "518604496151",
  appId: "1:518604496151:web:85347b60acede3ccc5eb52",
  measurementId: "G-116NFDM00R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
                                               


// Melding verzenden
document.getElementById("reportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const type = document.getElementById("reportType").value;
  const location = document.getElementById("reportLocation").value;
  const description = document.getElementById("reportDescription").value;

  db.ref("reports").push({ type, location, description });

  document.getElementById("reportForm").reset();
});

// Nieuwe meldingen tonen
db.ref("reports").on("child_added", function(snapshot) {
  const data = snapshot.val();
  const row = document.createElement("tr");
  row.innerHTML = `<td>${data.type}</td><td>${data.location}</td><td>${data.description}</td>`;
  document.querySelector("#reportsTable tbody").appendChild(row);
});
