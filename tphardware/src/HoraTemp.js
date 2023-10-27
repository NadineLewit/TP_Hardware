import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';


const HoraTemp = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [temp, setTemp] = useState(null);


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
            var prod = response;
                setTemp(prod) 
                console.log(temp + "BIEN")    

            }
            catch(error) {
                console.log(error)
                console.log(temp + "MAL")    

                console.log('Error fetching weather data');
            }
        setLocation(location);
    })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        console.log(location)
    }

  return (
    <View>
      <Text>{text}</Text>
      <Text>{temp}</Text>
    </View>
  );
};

export default HoraTemp;