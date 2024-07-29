import { View, useWindowDimensions, Image, Text, TouchableOpacity } from "react-native";
import Logo from "@/components/Logo";
import ButtonConfirmar from "@/components/ButtonConfirmar";
import LoadingBar from "@/components/LoadingBar";
import ButtonBack from "@/components/ButtonBack";
import InputName from "@/components/InputName";

export default function TelaPerfilResponsavel() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        backgroundColor: "#f48080",
        width,
        height,
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "#f48080" }}>
        <Logo />
      </View>

      <View style={{position: "absolute", zIndex: 1, marginTop: 210}}>
        <Image source={require("@/assets/images/family.png")} />
      </View>

      <View
        style={{
          backgroundColor: "#e2e1ff",
          height,
          width,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 350,
        }}
      >
        <View
          style={{
            marginBottom: 30,
            marginTop: 60,
            width: 300,
            height: 96,
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-between"
          }}
        >
          <ButtonBack />
          <Text
            style={{
              fontSize: 24,
              lineHeight: 48,
              fontFamily: "IBM Plex Sans",
              color: "#7b6dd1",
              fontWeight: "bold",
            }}
          >
            Qual é o seu{" "}
            <Text
              style={{
                color: "#f48080",
                fontFamily: '"B612 Mono", monospace',
                fontWeight: "bold",
              }}
            >
              nome
            </Text>
            ?
          </Text>
        </View>
        <LoadingBar width={206} />

        <InputName imagePath={require('@/assets/images/User.png')}placeholder="Digite seu nome." borderBottomColor="#f48080" placeholderTextColor="#f48080" />
        <ButtonConfirmar text="CONFIRMAR" backgroundColor="#f48080" />
      </View>
    </View>
  );
}