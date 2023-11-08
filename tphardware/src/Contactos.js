import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {All} from "./styles.js"
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from "react";
import { Avatar, Card, IconButton } from 'react-native-paper';



const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };


  useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
            });
    
            if (data.length > 0) {
              const contact = data[0];
              setContactos(data)
            }
          }
        })();
      }, []);
  return (
    <View style={All.contactosContainer}>
      <Text style={All.TusContactosTexto}>Tus contactos:</Text>
      <FlatList
      
          data={contactos}
          renderItem={({item}) => 
          <>
          <Card.Title
            title={item.lastName ? `${item.firstName} ${item.lastName}`: `${item.firstName}`}
            subtitle={item.phoneNumbers ? item.phoneNumbers.map((num) => num.number).join(', ') : 'No hay un número'}
            left={(props) => <Avatar.Icon {...props} icon="account-box" />}
          />
          </>
         }
          keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Contactos;