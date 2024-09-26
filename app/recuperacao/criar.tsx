import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import InputPassword from "@/components/InputPassword";
import InputConfirmPassword from "@/components/InputConfirmPassword";

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
    fontWeight: "bold",
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#888888",
    fontFamily: "IBM Plex Sans, sans-serif",
    width: 332,
    lineHeight: 20,
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

export default function criarNovaSenha() {
  const { width, height } = useWindowDimensions();
  const [password, setPassword] = useState<string>();
  const [confirmedPassword, setConfirmedPassword] = useState<string>();

  /*
  const handleChangePassword = async () => {
    if (password && confirmedPassword) {
      try {
        const data = { password, confirmedPassword };
        
        alert("Senha alterada com sucesso!");
      } catch (error: any) {
        alert("Erro ao alterar a senha: " + error.message);
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }; */

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
      <Text style={styles.modalTitle}>Criar nova senha</Text>
      <Text style={styles.modalSubtitle}>
        Um{" "}
        <Text style={{ fontWeight: "bold" }}>
          link será enviado para o seu e-mail
        </Text>{" "}
        para você alterar a sua senha.
      </Text>
      <InputPassword
        imagePath={require("@/assets/images/key.svg")}
        placeholder="Digite a sua senha"
        borderBottomColor="#f48080"
        placeholderTextColor="#f48080"
        setVar={setPassword}
      />
      <InputConfirmPassword
        imagePath={require("@/assets/images/key.svg")}
        placeholder="Confirme a sua senha"
        borderBottomColor="#F48080"
        placeholderTextColor="#F48080"
        setVar={setConfirmedPassword}
        inputPassword={password}
      />
      <Pressable
        style={{ ...styles.button, backgroundColor: "#F48080" }}
        
      >
        <Text style={styles.buttonText}>ALTERAR SENHA</Text>
      </Pressable>
    </View>
  );
}
