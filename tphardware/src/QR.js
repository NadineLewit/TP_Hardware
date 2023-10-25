import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


const QR = ({ navigation }) => {
    
    return (
        <View >
            <QRCode
                value= "This is the value in the QRcode"
            />
        </View>
    );
    
}
export default QR;