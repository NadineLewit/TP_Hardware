import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import {All} from "./styles.js"
import ActInd from "./ActInd.js";

const CamaraQR = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status === 'granted') {
        setIsLoading(false)
      }
    };
    getBarCodeScannerPermissions();

    if (hasPermission === null) {
      <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      <Text>No access to camera</Text>;
    }
    
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Los nombres son: ${data} `);
  };
  return (
    <View style={{ flex: 1 }}>
      {!isLoading ? (
        <>
      <SafeAreaView>
            <View style={All.QRCentro}>
                <QRCode
                size={300}
                value={"Nadine Lewit y Juliana Pansowy"}
                logoSize={60}
                logoBackgroundColor='transparent'
            />
        </View>
      </SafeAreaView>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && (
        <Button
          title="Toque para escanear nuevamente"
          onPress={() => setScanned(false)}
        />
      )}
</>
      ) : (
        <ActInd size="50px"/>
      )}
    </View>
  );
}
export default CamaraQR;