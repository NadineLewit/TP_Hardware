import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {All} from "./styles.js"
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 

const HoraTemp = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [temp, setTemp] = useState(null);
    const [fechaHoraa, setFechaHoraa] = useState(null);


    useEffect(() => {
    (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }

         let location = await Location.getCurrentPositionAsync({});
        try {
            
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=0cd4c845628a93ee3dd46acea3646046&units=metric`)
            const hoy = new Date();
            const month = hoy.getMonth()+1;
            const year = hoy.getFullYear();
            const date = hoy. getDate();
            const fechaa = month + "/" + date + "/" + year;
            const fechaHoraa = new Date();

            var temperatura = response.data.main.temp;
            var locacion = response.data.name;

            console.log(response.data)
                setTemp(temperatura)
                setLocation(locacion);
                setFechaHoraa(fechaHoraa.toLocaleString())
                // console.log(temp + "BIEN")    

            }
            catch(error) {
                console.log(error)
                // console.log(temp + "MAL")    

                console.log('Error fetching weather data');
            }
        
    })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        // console.log(location)
    }

  return (
    //CARGANDOOOOO HACERRR MALUMA
    <View>
        <Card.Title
            title={<Text style={All.TemperaturaTexto}> Temperatura actual: {temp}</Text>}
            left={(props) =><FontAwesome5 name="temperature-high" size={24} color="black" />}
          />

      <Card.Title
            title={<Text style={All.Barrio}> Barrio: {location}</Text>}
            left={(props) =><Ionicons name="location" size={24} color="black" />}
          />

      <Card.Title
            title={<Text style={All.Fecha}> Fecha y hora: {fechaHoraa}</Text>}
            left={(props) =><Fontisto name="date" size={24} color="black" />}
          />
      
      
    </View>
  );
};

export default HoraTemp;