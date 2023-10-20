import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {All} from "./styles.js"

const Home = ({ navigation }) => {
    const Contactos = () => {
        navigation.navigate('Contactos')
    }
  return (
    <View style={All.container}>
      <Text style={All.title}>¡Bienvenido a Mi Aplicación!</Text>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText} onPress={Contactos}> Contactos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={All.button}>
        <Text style={All.buttonText}>Botón 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;