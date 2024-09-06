import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 332,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#7b6dd1",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },

  text: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontFamily: "IBM Plex Sans",
  },

  selected: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "auto",
    height: 40,
    borderRadius: 16,
    zIndex: -1,
  },

  textSelected: {
    color: "#7b6dd1",
    fontWeight: "bold",
    fontFamily: "IBM Plex Sans",
    fontSize: 12,
  },
});

export default function PeriodSwitch() {
  const [selectedPeriod, setSelectedPeriod] = useState("Hoje");

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={selectedPeriod === "Hoje" ? styles.selected : null} onPress={() => handlePeriodSelect("Hoje")}>
          <Text style={selectedPeriod === "Hoje" ? styles.textSelected : styles.text }>Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity style={selectedPeriod === "7 dias" ? styles.selected : null } onPress={() => handlePeriodSelect("7 dias")}>
          <Text style={selectedPeriod === "7 dias" ? styles.textSelected : styles.text}>7 dias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={selectedPeriod === "30 dias" ? styles.selected : null } onPress={() => handlePeriodSelect("30 dias")}>
          <Text style={selectedPeriod === "30 dias" ? styles.textSelected : styles.text}>30 dias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={selectedPeriod === "Período" ? styles.selected : null } onPress={() => handlePeriodSelect("Período")}>
          <Text style={selectedPeriod === "Período" ? styles.textSelected : styles.text}>Período</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
