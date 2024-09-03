
/*
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { View, Text, StyleSheet, Button } from 'react-native';
import { askForCameraPermission } from '@/app/utils/permissions'; // ajuste o caminho se necessário

const QRCodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    requestPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (type === Camera.Constants.BarCodeType.qr) {
      setScanned(true);
      console.log('QR code data:', data);
      alert(`QR code with data ${data} has been scanned!`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={'Tap to Scan Again'}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default QRCodeScannerScreen;

*/