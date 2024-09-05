import { View, useWindowDimensions, Image, Text } from "react-native";
import Logo from "@/components/Logo";
import ButtonConfirmar from "@/components/ButtonConfirmar";


export default function TelaConfirmacaoCrianca() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        backgroundColor: "#f480d4",
        width,
        height,
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "#f480d4" }}>
        <Logo />
      </View>

      <View style={{ position: "absolute", zIndex: 1, marginTop: 260 }}>
        <Image source={require("@/assets/images/family.png")} />
      </View>

      <View style={{ position: "absolute", marginTop: 70 }}>
        <Image source={require('@/assets/images/confetti.png')}/>
      </View>
      
      <View style={{ position: "absolute", marginTop: 200 }}>
        <Image source={require('@/assets/images/check.png')}/>
      </View>
      

      <View
        style={{
          backgroundColor: "#e2e1ff",
          height,
          width,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 400,
        }}
      >
        <View
          style={{
            marginBottom: 30,
            marginTop: 60,
          }}
        >

          <Text
            style={{
              fontSize: 24,
              lineHeight: 48,
              fontFamily: "IBM Plex Sans",
              color: "#7b6dd1",
              fontWeight: "bold",
              width: 400,
              textAlign: 'center'
            }}
          >
            Sucesso na conexão!
          </Text>
        </View>
        <View style={{width:309, height:8, backgroundColor: '#00b112'}}></View>
        <View style={{width: 264, marginTop: 50, marginBottom: 50}}>
          <Text style={{textAlign: 'center', lineHeight: 25, fontSize: 16, color: '#888888',  fontFamily: "IBM Plex Sans", fontWeight: 500}}>O <Text style={{color: '#8093f4', fontFamily: 'B612 Mono, monospace'}}>Guardião</Text> está pronto para manter a juventude segura <Text style={{color: '#00b112'}}>online</Text>.</Text>
        </View>
        <ButtonConfirmar text="PROTEGER ESTE DISPOSITIVO" backgroundColor="#f480d4" />
      </View>
    </View>
  );
}