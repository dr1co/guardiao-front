import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    width: 332,
    height: 106,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#f48080",
    marginTop: 20,
  },
});

export default function ContainerPerfil() {
  return (
    <View style={styles.container}>
        <View style={{position: 'absolute', left: 0, marginLeft: 40}}>
          <Image source={require("@/assets/images/userphoto.png")} />
        </View>
        <View style={{ alignItems: 'center', marginLeft: 80}}>
          <Text style={{color: "#f48080", marginBottom: 15, fontSize: 18, fontWeight: 'bold'}}>[UserName]</Text>
          <Text style={{color: '#9d9ea1', fontSize: 12}}>[UserEmail]</Text>
      </View>
    </View>
  );
}
