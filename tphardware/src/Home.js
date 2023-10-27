import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {All} from "./styles.js"
import React, { useState, useEffect } from 'react';

const Home = ({ navigation }) => {
    const Contactos = () => {
        navigation.navigate('Contactos')
    }

    const QR = () => {
      navigation.navigate('QR')
  }

  const Camara = () => {
    navigation.navigate('Camara')
  }
  const HoraTemp = () => {
    navigation.navigate('HoraTemp')
  }

  return (
    <View style={All.container}>
      <Text style={All.title}>¡Bienvenido a Mi Aplicación!</Text>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={Contactos}> Contactos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={QR}>QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={Camara}>Camara</Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={HoraTemp}>HoraTemp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;