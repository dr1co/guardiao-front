import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import InputEmail from "@/components/InputEmail";
import { useState } from "react";
import { readForgotPassword } from "@/api/axiosInstance";
import { Link } from "expo-router";


const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#ffe1e1",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: "#F48080",
    fontWeight: 'bold',
    fontFamily: "IBM Plex Sans, sans-serif",
    width: 330,
    textAlign: "center"
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#888888",
    fontFamily: "IBM Plex Sans, sans-serif",
    width: 332,
    lineHeight: 20
  },
  
  button: {
    width: "80%",
    height: 66,
    backgroundColor: "#8093F4",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    display: "flex"
  },
  buttonText: {
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default function SenhaAlterada() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{ ...styles.modal, width: width, height: height, display: "flex" }}
    >
      <Link href="/entrar" style={{ position: "absolute", top: 30, left: 40 }}>
        <Image source={require("@/assets/images/arrow_left_orange.png")} />
      </Link>
      
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 50,
          padding: 10,
          marginBottom: 20,
          borderWidth: 3,
          borderColor: "#00b112",
        }}
      >
        <Image
          source={require("@/assets/images/check-icon.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <Text style={styles.modalTitle}>Senha alterada com sucesso!</Text>
      <Text style={styles.modalSubtitle}>
        Volte para a <Text style={{fontWeight: "bold"}}>página de login</Text> e insira suas credenciais para entrar no Guardião.
      </Text>
      
      <Link href="/entrar" style={{ ...styles.button, backgroundColor: "#F48080" }}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Link>
    </View>
  );
}
