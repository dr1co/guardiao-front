import React from "react";
import { useState } from 'react';
import { Switch, Text, StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f48080",
    borderRadius: 16,
    width: 332,
    height: 57,
    padding: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },

  text: {
    color: "white",
    fontFamily: "IBM Plex Sans",
    fontSize: 15,
  },
});

type ButtonParameters = {
  text: string;
  imagePath: object;
};

export default function ButtonConfigSwitch(props: ButtonParameters) {
  const [switchValue, setSwitchValue] = useState(false);
  const thumbColor = switchValue ? "#f48080" : "#ccc";

  return (
    <View>
      <View style={{ ...styles.button }}>
        <View style={{marginRight: 10, marginLeft: 15}}>
          <Image source={props.imagePath} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 230}}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={{ right: 0 }}>
          <Switch value={switchValue}
          onValueChange={(newValue) => setSwitchValue(newValue)}
          thumbColor={thumbColor} 
          trackColor={{ true: "#ffffff", false: "#ccc" }}
          >
          
          </Switch>

        </View>
        </View>
        

        
      </View>
    </View>
  );
}
