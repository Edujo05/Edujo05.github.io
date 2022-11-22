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
firebase.database().ref('Blink/TIME_ON').on('value', function(data) {
    lblTIME_ON.innerHTML = JSON.stringify(data.val())
})
firebase.database().ref('Blink/TIME_OFF').on('value', function(data) {
    lblTIME_OFF.innerHTML = JSON.stringify(data.val())
})

//------------------------ Actualizar un valor ----------------------------
function fnEnviar(){
    var Timeone = parseInt(document.getElementById('Timeone').value);
    firebase.database().ref().update({'Blink/TIME_ON':Timeone});

    var Timetwo = parseInt(document.getElementById('Timetwo').value);
    firebase.database().ref().update({'Blink/TIME_OFF':Timetwo});
}
