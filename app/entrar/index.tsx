import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import InputName from "@/components/InputName";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48080",
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
    color: "#F48080",
    fontSize: 20,
    marginBottom: 50,
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
    backgroundColor: "#FFE1E1",
    position: "absolute",
    left: 0,
    bottom: 0,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  footer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
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
});

export default function Index() {
  const { width, height } = useWindowDimensions();

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
          Entrar no <Text style={{ color: "#7B6DD1" }}>Guardião</Text>.
        </Text>

        <View style={styles.inputContainer}>
          <InputName
            imagePath={require("@/assets/images/mail.svg")}
            placeholder="Digite o seu e-mail"
            borderBottomColor="#f48080"
            placeholderTextColor="#f48080"
          />

          <InputName
            imagePath={require("@/assets/images/key.svg")}
            placeholder="Digite a sua senha"
            borderBottomColor="#f48080"
            placeholderTextColor="#f48080"
          />
          <TouchableOpacity>
            <Text style={styles.inputText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton}>
            <Link style={styles.linkContainer} href="/">
              <Image
                source={require("@/assets/images/seta_esq_vermelha.svg")}
              />
              <Text
                style={{
                  ...styles.buttonText,
                  color: "#F48080",
                }}
              >
                {" "}
                VOLTAR{" "}
              </Text>
            </Link>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#F48080" }}
        >
          <Link style={styles.linkContainer} href="/conectar">
            <Text style={styles.buttonText}> ENTRAR </Text>
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
