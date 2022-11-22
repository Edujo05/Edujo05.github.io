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


//------------------------ Actualizar un valor ----------------------------
function fnEnviar(){
    var Btn_1 = parseInt(document.getElementById('Btn_1').value);
    firebase.database().ref().update({'Secuencias/Botones/Btn_1':Btn_1});

    var Btn_2 = parseInt(document.getElementById('Btn_2').value);
    firebase.database().ref().update({'Secuencias/Botones/Btn_2':Btn_2});


    //------------------------ Leer Datos --------------------------------------
    firebase.database().ref('Secuencias/Botones/Btn_1').on('value', function(data) {
        lblBTN_ONE.innerHTML = JSON.stringify(data.val())
    })
    firebase.database().ref('Secuencias/Botones/Btn_2').on('value', function(data) {
        lblBTN_TWO.innerHTML = JSON.stringify(data.val())
    })

    if (Btn_1 == 0 && Btn_2 == 0){
        var Led_1 = 1;
        firebase.database().ref().update({'Secuencias/Leds/Led_1':Led_1});
        var Led_2 = 0;
        firebase.database().ref().update({'Secuencias/Leds/Led_2':Led_2});
        var Led_3 = 1;
        firebase.database().ref().update({'Secuencias/Leds/Led_3':Led_3});
    }
}
