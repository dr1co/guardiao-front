import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import { Link } from "expo-router";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7B6DD1",
  },
  logo: {
    gap: 10,
    width: "90%",
    position: "absolute",
    top: 100,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  logoTitle: {
    paddingLeft: 20,
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: "bold",
    fontSize: 32,
  },
  logoBar: {
    marginLeft: 20,
    width: 154,
    height: 2,
    backgroundColor: "white",
  },
  logoText: {
    paddingTop: 4,
    paddingLeft: 20,
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },
  balls: {
    position: "absolute",
    top: 24,
    right: 164,
  },
  pinkBall: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#F480D4",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: "absolute",
  },
  redBall: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F48080",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: "absolute",
    top: 80,
    left: 56,
  },
  blueBall: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#8093F4",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: "absolute",
    top: -64,
    left: 90,
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
    height: "60%",
    gap: 24,
    backgroundColor: "#FFE1E1",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
    borderColor: "#F48080",
    position: "absolute",
    bottom: 0,
  },
  menuText: {
    width: "80%",
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#797979",
    fontSize: 14,
    marginBottom: 50,
  },
  button: {
    width: "80%",
    height: 66,
    backgroundColor: "#8093F4",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: '"B612 Mono", monospace',
    fontWeight: 700,
    fontSize: 20,
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
});

export default function Index() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ ...styles.screen, width, height }}>
      <View style={styles.balls}>
        <View style={styles.pinkBall} />
        <View style={styles.redBall} />
        <View style={styles.blueBall} />
      </View>

      <View style={styles.logo}>
        <Image
          style={styles.logoImg}
          source={require("@/assets/images/logo.svg")}
        />
        <View>
          <Text style={styles.logoTitle}>Guardião</Text>
          <View style={styles.logoBar}></View>
        </View>
        <Text style={styles.logoText}>
          Mantendo a juventude segura{" "}
          <Text style={{ color: "#F48080" }}>online</Text>.
        </Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuText}>
          Entre ou cadastre-se e{" "}
          <Text style={{ color: "#7B6DD1" }}>
            obtenha controle sobre o que suas crianças consomem online
          </Text>
          .
        </Text>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#F48080" }}
        >
          <Link style={styles.linkContainer} href="/entrar">
            <Text style={styles.buttonText}> ENTRAR </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#F480D4" }}
        >
          <Link style={styles.linkContainer} href="/cadastrar">
            <Text style={styles.buttonText}> CADASTRAR </Text>
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
