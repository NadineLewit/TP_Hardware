import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {All} from "./styles.js"
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from "react";
import { Avatar, Card } from 'react-native-paper';
import ActInd from "./ActInd.js";

const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false)
          }
        })();
      }, []);
  return (
    <View style={All.contactosContainer}>
      {!isLoading ? (
        <>
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
        </>
      ) : (
        <ActInd size="50px"/>
      )}
    </View>
  );
};

export default Contactos;