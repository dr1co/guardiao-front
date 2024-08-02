import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// criando estilos para cada parte do componente
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    width: 347, 
    height: 190, 
    borderRadius: 50,
    elevation: 5
  },

  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: '"B612 Mono", monospace'
  },

  text: {
    fontSize: 15,
    color: 'white',
    marginTop: 15,
    textAlign: "center",
    fontFamily: 'IBM Plex Sans'
  }
});

// criando tipo das propriedades
type ButtonParameters = {
  backgroundColor: string,
  title: string,
  text: string
}

// criando estrutura do botão com as propriedades variáveis
const CustomButton = (props: ButtonParameters) => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: props.backgroundColor}}
      >
        
        <Text style={styles.title}>{props.title}</Text>
        <View style={{height: 1, width: 311, backgroundColor: "white"}}></View>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;