import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import InputEmail from "@/components/InputEmail";
import { useState } from "react";
import InputPassword from "@/components/InputPassword";
import InputConfirmPassword from "@/components/InputConfirmPassword";
import { createRegister } from "@/api/axiosInstance";
import { router } from "expo-router";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F480D4",
  },
  logo: {
    gap: 10,
    width: "90%",
    position: "absolute",
    top: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logoName: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
    paddingRight: 24,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  logoTitle: {
    paddingLeft: 0,
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: "bold",
    fontSize: 32,
  },
  logoBar: {
    marginLeft: 0,
    width: 154,
    height: 2,
    backgroundColor: "white",
  },
  logoText: {
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "75%",
    gap: 24,
    backgroundColor: "#E1EBFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
    borderColor: "#8093F4",
    position: "absolute",
    bottom: 0,
  },
  menuText: {
    width: "80%",
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#F480D4",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 100,
    fontWeight: "bold",
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
  backButton: {
    width: 166,
    height: 40,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC9F0",
    position: "absolute",
    left: 0,
    bottom: 80,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  footer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 100,
  },
  footerText: {
    color: "#797979",
    fontSize: 10,
  },
  linkContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  inputText: {
    width: 330,
    textAlign: "right",
    fontSize: 10,
    color: "#8093F4",
    textDecorationLine: "underline",
  },
  textRules: {
    color: "#9d9ea1",
    fontSize: 15,
    fontWeight: 500,
  },
});

export default function Index() {
  const { width, height } = useWindowDimensions();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmedPassword, setConfirmedPassword] = useState<string>();

  const handleRegister = async () => {
    if (email && password && confirmedPassword) {
      try {
        const data = { email, password };
        const result = await createRegister(data);
        alert("Usuário criado com sucesso!");

        router.navigate("/conectar");
      } catch (error: any) {
        alert("Erro ao criar usuário! " + error.message);
      }
    }
  };

  return (
    <View style={{ ...styles.screen, width, height }}>
      <View style={styles.logo}>
        <View style={styles.logoName}>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/logo.svg")}
          />
          <View>
            <Text style={styles.logoTitle}>Guardião</Text>
            <View style={styles.logoBar}></View>
          </View>
        </View>
        <Text style={styles.logoText}>
          Mantendo a juventude segura{" "}
          <Text style={{ color: "#7B6DD1" }}>online</Text>.
        </Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuText}>
          Cadastrar-se no <Text style={{ color: "#7B6DD1" }}>Guardião</Text>.
        </Text>

        <View style={styles.inputContainer}>
          <InputEmail
            imagePath={require("@/assets/images/mail.svg")}
            placeholder="Digite o seu e-mail"
            borderBottomColor="#F480D4"
            placeholderTextColor="#F480D4"
            setVar={setEmail}
          />
          <View
            style={{
              backgroundColor: "#FFE1F0",
              padding: 15,
              borderRadius: 16,
              borderLeftWidth: 5,
              borderLeftColor: "#F480D4",
              marginTop: -20,
              marginBottom: 20,
              shadowColor: "black",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              width: 332,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
                color: "#F480D4",
              }}
            >
              Crie uma senha com no mínimo:
            </Text>
            <Text style={styles.textRules}>- 8 caracteres</Text>
            <Text style={styles.textRules}>- 1 letra maiúscula (A-Z)</Text>
            <Text style={styles.textRules}>- 1 número (0-9)</Text>
            <Text style={styles.textRules}>
              - 1 caractere especial (@, #, $, %, &, *)
            </Text>
          </View>

          <InputPassword
            imagePath={require("@/assets/images/key.svg")}
            placeholder="Digite a sua senha"
            borderBottomColor="#F480D4"
            placeholderTextColor="#F480D4"
            setVar={setPassword}
          />
          <View style={{ marginTop: -25, marginBottom: 50 }}>
            <InputConfirmPassword
              imagePath={require("@/assets/images/key.svg")}
              placeholder="Confirme a sua senha"
              borderBottomColor="#F480D4"
              placeholderTextColor="#F480D4"
              setVar={setConfirmedPassword}
              inputPassword={password}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#F480D4" }}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}> ENVIAR CADASTRO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton}>
          <Link style={styles.linkContainer} href="/">
            <Image source={require("@/assets/images/seta_esq_rosa.svg")} />
            <Text
              style={{
                ...styles.buttonText,
                color: "#F480D4",
              }}
            >
              {" "}
              VOLTAR{" "}
            </Text>
          </Link>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text
            style={{ ...styles.footerText, textDecorationLine: "underline" }}
          >
            Privacidade & Termos
          </Text>
          <Text style={styles.footerText}>&copy; 2024 Guardião</Text>
        </View>
      </View>
    </View>
  );
}
