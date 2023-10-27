import React, { Component, Fragment } from 'react';
import { View, SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QR = ({ navigation }) => {


    return (
        <SafeAreaView>
            <View>
                <QRCode
                size={350}
                value={"Nadine Lewit y Juliana Pansowy"}
                // logo={{uri: QRLogoImage}}
                logoSize={60}
                logoBackgroundColor='transparent'
                // getRef={ref}
            />
        </View>
      </SafeAreaView>
    );
    
}
export default QR;