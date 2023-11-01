import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
    const [data, setData] = useState({});

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
        if (status !== 'granted') {
        setErrorMsg('Permission to access sensor was denied, open settings');
        return;
        }
    })();
    console.log(data)
    if(y > 0.7 || y > -0.7){
        console.log("moviste el celuuu") // FUNNCIONA, HARDCORDEAR EL NUMERO DE TELEFONO RANDOM
    }
    }, []);

    useEffect(() => {
        console.log(data)
        }, [data]);
  


  return (
    <View >
      <Text >x: {x}</Text>
      <Text>y: {y}</Text>
      <Text >z: {z}</Text>

    </View>
  );
}