import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    zIndex: 2,
  },

  menuBar: {
    backgroundColor: "#7b6dd1",
    width: 400,
    height: 100,
    borderRadius: 50,
    flexDirection: 'row'
  },

  circle: {
    backgroundColor: "white",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 5
  },

  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },

  textSelected: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default function MenuBar() {
  const [selectedItem, setSelectedItem] = useState("Início");

  function handleSelectedUtem(item: string) {
    setSelectedItem(item);
  }

  return (
    <View style={styles.container}>

      <View style={styles.menuBar}>

        <View style={{ marginLeft: 35, marginTop: 5}}>
          <TouchableOpacity onPress={() => handleSelectedUtem("Início")}>
            <Image source={selectedItem === "Início" ? require("@/assets/images/selected_inicio.png"): require("@/assets/images/home_purple.png") } />
          </TouchableOpacity>
          <View style={{ width: 60, marginTop: 10}}>
            <Text style={selectedItem === "Início" ? styles.textSelected : styles.text }>Início</Text>
          </View>
        </View>

        <View style={{ marginLeft: 40, marginTop: 20}}>
          <TouchableOpacity>
            <Image source={require("@/assets/images/pie_white.png")} />
          </TouchableOpacity>
          <View style={{ width: 40, marginTop: 23, marginLeft: -3}}>
            <Text style={styles.text}>Painel</Text>
          </View>
        </View>

        <View style={{ marginLeft: 40, marginTop: 18}}>
          <TouchableOpacity>
            <Image source={require("@/assets/images/baby_white.png")} />
          </TouchableOpacity>
          <View style={{ width: 70, marginTop: 15, marginLeft: -10}}>
            <Text style={styles.text}>Conteúdo</Text>
          </View>
        </View>

        <View style={{ marginLeft: 30, marginTop: 18}}>
          <TouchableOpacity>
            <Image source={require("@/assets/images/settings_white.png")} />
          </TouchableOpacity>
          <View style={{ width: 100, marginTop: 19, marginLeft: -27}}>
            <Text style={styles.text}>Configurações</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
