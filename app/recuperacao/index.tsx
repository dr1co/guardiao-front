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
  buttonText: {
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default function EnviarEmail() {
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState<string>();

  const handleForgotPassword = async () => {
    if (email) {
      try {
        const data = { email };
        const result = await readForgotPassword(data);
        alert("E-mail de recuperação enviado com sucesso!");
      } catch (error: any) {
        alert("Erro ao enviar e-mail de recuperação: " + error.message);
      }
      
    } else {
      alert("Por favor, preencha o campo de e-mail.");
    }
  }

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
          source={require("@/assets/images/password.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <Text style={styles.modalTitle}>Esqueceu a senha?</Text>
      <Text style={styles.modalSubtitle}>
        Um{" "}
        <Text style={{ fontWeight: "bold" }}>
          link será enviado para o seu e-mail
        </Text> para você alterar a sua senha.
      </Text>
      <InputEmail
        imagePath={require("@/assets/images/mail.svg")}
        placeholder="Digite o seu e-mail"
        borderBottomColor="#f48080"
        placeholderTextColor="#f48080"
        setVar={setEmail}
      />
      <Pressable
        style={{ ...styles.button, backgroundColor: "#F48080" }}
        onPress={handleForgotPassword}
      >
        <Text style={styles.buttonText}>ENVIAR</Text>
      </Pressable>
    </View>
  );
}
