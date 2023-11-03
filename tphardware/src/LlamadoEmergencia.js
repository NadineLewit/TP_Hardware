import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import * as SMS from 'expo-sms';
import {All} from "./styles.js"

const LlamadoEmergencia = () => {
    const [data, setData] = useState({});
    const [num, setNum] = useState(50276669);


  const _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
  };

  let { x, y, z } = data;

  

  useEffect(() => {
    _subscribe();
    (async () => {
        let { status } = await Accelerometer.requestPermissionsAsync();
        const isAvailable = await SMS.isAvailableAsync();
        if (status !== 'granted' && !isAvailable) {
        setErrorMsg('Permisos para acceder fueron rechazados, abrir configuracion');
        return;
        }
        else{
          if (data.y > 0.7 || data.y < -0.7) {
            const result = await SMS.sendSMSAsync([num], 'Necesito ayuda');
          }
      }
    })();
   
    }, [num]);

    useEffect(() => {
      (async () => {
        if (data.y > 0.8 || data.y < -0.8) {
          const result  = await SMS.sendSMSAsync([num], 'Ayuda, esto en emergencias');
         console.log("se movio")
        }
    })();
    }, [data]);


        return (
          <View style={All.contactosContainer}>
          <Text style={All.textoLlamado}>Mueva el celular para mandar un mensaje de emergencia al numero deseado</Text>
          <TextInput
            style={All.input}
            placeholder="Ingrese un número"
            onChangeText={(text) => setNum(text)}
          />
          <Text style={All.mansajeLlamado}>Si no escribe ningun numero, el mensaje sera mandado a un numero random.</Text>
          </View>
        );

}
export default LlamadoEmergencia;