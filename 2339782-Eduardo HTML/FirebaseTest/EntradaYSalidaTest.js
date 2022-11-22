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
firebase.database().ref('Entradas y Salidas/Entradas/Entrada_1').on('value', function(data) {
    lblENT_ONE.innerHTML = JSON.stringify(data.val())
})
firebase.database().ref('Entradas y Salidas/Entradas/Entrada_2').on('value', function(data) {
    lblENT_TWO.innerHTML = JSON.stringify(data.val())
})
firebase.database().ref('Entradas y Salidas/Entradas/Potenciometro').on('value', function(data) {
    lblENT_THREE.innerHTML = JSON.stringify(data.val())
})


firebase.database().ref('Entradas y Salidas/Salidas/Salida_1').on('value', function(data) {
    lblOUT_ONE.innerHTML = JSON.stringify(data.val())
})
firebase.database().ref('Entradas y Salidas/Salidas/Salida_2').on('value', function(data) {
    lblOUT_TWO.innerHTML = JSON.stringify(data.val())
})
firebase.database().ref('Entradas y Salidas/Salidas/Salida_3').on('value', function(data) {
    lblOUT_THREE.innerHTML = JSON.stringify(data.val())
})

//------------------------ Actualizar un valor ----------------------------
function fnEnviarEntrada(){
    var EntOne = parseInt(document.getElementById('EntOne').value);
    firebase.database().ref().update({'Entradas y Salidas/Entradas/Entrada_1':EntOne});
    var EntTwo = parseInt(document.getElementById('EntTwo').value);
    firebase.database().ref().update({'Entradas y Salidas/Entradas/Entrada_2':EntTwo});
    var EntThree = parseInt(document.getElementById('EntThree').value);
    firebase.database().ref().update({'Entradas y Salidas/Entradas/Potenciometro':EntThree});
}

function fnEnviarSalida(){
    var OutOne = parseInt(document.getElementById('OutOne').value);
    firebase.database().ref().update({'Entradas y Salidas/Salidas/Salida_1':OutOne});
    var OutTwo = parseInt(document.getElementById('OutTwo').value);
    firebase.database().ref().update({'Entradas y Salidas/Salidas/Salida_2':OutTwo});
    var OutThree = parseInt(document.getElementById('OutThree').value);
    firebase.database().ref().update({'Entradas y Salidas/Salidas/Salida_3':OutThree});
}