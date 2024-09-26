import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
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
  },
  modalText: {
    fontSize: 12,
    marginBottom: 20,
    color: "#888888",
    fontFamily: "IBM Plex Sans, sans-serif",
    width: 332,
    lineHeight: 20
  },
  buttonText: {
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default function VerificarEmail() {
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
          borderColor: "#f48080",
        }}
      >
        
        <Image
          source={require("@/assets/images/email.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <Text style={styles.modalTitle}>Verifique o seu e-mail</Text>
      <Text style={styles.modalSubtitle}>
        Um link foi enviado para <Text style={{ fontWeight: "bold" }}>
           [email] {/* censurar email
        */}
        </Text> para você alterar a sua senha.
      </Text>
      <Text style={styles.modalText}>Não recebeu o e-mail? <Link style={{color: "#f48080", fontWeight: "bold", textDecorationLine: "underline"}} href="/">Clique aqui para receber o reenvio.</Link></Text>
    </View> 
  );
}
