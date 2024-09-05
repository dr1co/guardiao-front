import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Modal } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f48080',
    borderRadius: 16,
    width: 332,
    height: 66,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },

  modal: {
    backgroundColor: '#ffe1e1',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  text: {
    color: 'white',
    fontFamily: 'B612 Mono, monospace',
    fontSize: 24,
    fontWeight: 'bold'
  },

  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40

  },

  camera: {
    flex: 1
  }, 
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function ButtonEscanear() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [displayScanner, setDisplayScanner] = useState(false);
  const [requestingPermission, setRequestingPermission] = useState(false);


 /* useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []); */

  const handleBarCodeScanned = ({type, data} : BarCodeScannerResult) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  const renderCamera = () => {
    return(
      <View style={styles.cameraContainer}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.camera}/>
      </View>
    );
  };

  const requestPermission = async() => {
    setRequestingPermission(true);
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    setRequestingPermission(false);
  }

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false && displayScanner) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    )
  }

  const handlePress = async () => {
    if (!hasPermission) {
      await requestPermission();
    }

    if (hasPermission) {
      setDisplayScanner(!displayScanner);
    }
  }

  if (requestingPermission) {
    return <Text>Requesting for camera permission</Text>
  }

  return (
    <View>
        {displayScanner && hasPermission && <Modal transparent={true}><View style={styles.modal}>
          {renderCamera()}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>OCULTAR SCANNER</Text>
        </TouchableOpacity></View>
        </Modal>}


        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>ESCANEAR QR CODE</Text>
        </TouchableOpacity>
    </View>
  );
}
