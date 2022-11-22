//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzOM_S6ewUy052sLTSY5zcf2wTyNrZ-Sg",
    authDomain: "iot-proyecto1-2339782.firebaseapp.com",
    databaseURL: "https://iot-proyecto1-2339782-default-rtdb.firebaseio.com",
    projectId: "iot-proyecto1-2339782",
    storageBucket: "iot-proyecto1-2339782.appspot.com",
    messagingSenderId: "919620477784",
    appId: "1:919620477784:web:7c82c40ad69900ecabbb2d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


  //------------------------ Leer Datos --------------------------------------
firebase.database().ref('Topico/Subtopico').on('value', function(data) {
    lblSubtopico.innerHTML = JSON.stringify(data.val())
})

//------------------------ Actualizar un valor ----------------------------
function fnEnviar(){
    var etValor = parseInt(document.getElementById('etValor').value);
    firebase.database().ref().update({'Topico/Subtopico':etValor});
}