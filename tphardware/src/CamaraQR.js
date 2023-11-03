import React, { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import {All} from "./styles.js"


const CamaraQR = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Los nombres son: ${data} `);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
            <View style={All.QRCentro}>
                <QRCode
                size={300}
                value={"Nadine Lewit y Juliana Pansowy"}
                // logo={{uri: QRLogoImage}}
                logoSize={60}
                logoBackgroundColor='transparent'
                // getRef={ref}
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
    </View>
  );
}

export default CamaraQR;