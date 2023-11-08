import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {All} from "./styles.js"
import React, { useState, useEffect } from 'react';

const Home = ({ navigation }) => {
    const Contactos = () => {
        navigation.navigate('Contactos')
    }

  const CamaraQR = () => {
    navigation.navigate('CamaraQR')
  }
  const HoraTemp = () => {
    navigation.navigate('HoraTemp')
  }
  const LlamadoEmergencia = () => {
    navigation.navigate('LlamadoEmergencia')
  }

  return (
    <View style={All.container}>
      <Text style={All.title}> Elija una función: </Text>
      <View>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={Contactos}> Contactos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={CamaraQR}>Camara y QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={HoraTemp}>Hora y Temperatura </Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={LlamadoEmergencia}>Llamado Emergencia</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;