import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {All} from "./styles.js"
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from "react";


const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
            });
    
            if (data.length > 0) {
              const contact = data[0];
              console.log(contact[5] + "aaa")
              setContactos(contact)
            }
          }
        })();
      }, []);
  return (
    <View style={All.container}>
      <Text style={All.title}>Contactos</Text>
      <FlatList
          data={contactos}
          renderItem={({item}) => <Text>{item.firstName}</Text> }
          keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Contactos;