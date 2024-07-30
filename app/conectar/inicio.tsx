import { View, useWindowDimensions, Text, Image } from "react-native";
import Logo from "@/components/Logo";
import ButtonPerfil from "@/components/ButtonPerfil";
import SubTitle from "@/components/SubTitle";
import LoadingBar from "@/components/LoadingBar";
import { Link } from 'expo-router';

export default function TelaPerfil() {
  const { width, height } = useWindowDimensions();


  return (
    <View
      style={{
        backgroundColor: "#7b6dd1",
        flex: 1,
        width: width,
        minHeight: height,
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "#7b6dd1", height: 80, marginTop: 15 }}>
        <Image source={require('@/assets/images/logo.png')}/>
      </View>

      <View
        style={{
          backgroundColor: "#e2e1ff",
          width,
          height,
          borderRadius: 50,
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginBottom: 30,
            marginTop: 60,
            width: 293,
            height: 96,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              lineHeight: 48,
              fontFamily: "IBM Plex Sans",
              color: "#7b6dd1",
              fontWeight: "bold",
            }}
          >
            Olá, {" "}
            <Text
              style={{
                color: "#f48080",
                fontWeight: "bold",
              }}
            >
              Usuário</Text>!
          </Text>
        </View>

        <View>
          <Text style={{
            fontFamily: "IBM Plex Sans",
            color: '#888888',
            fontWeight: 500
          }}>
            Selecione uma <Text style={{color: '#f480d4'}}>criança</Text> e consulte as últimas atualizações do Guardião.
          </Text>
        </View>
    
      </View>
    </View>
  );
}