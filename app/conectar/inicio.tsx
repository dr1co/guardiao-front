
import { View, useWindowDimensions, Image, Text } from 'react-native';
import ButtonsTop from '@/components/ButtonsTop';
import ButtonCriancas from '@/components/ButtonCriancas';
import ButtonGeral from '@/components/ButtonGeral';
import { useEffect, useState } from 'react';

export default function TelaInicio() {
  const { width, height } = useWindowDimensions();
  const [userName, setUserName] = useState('');

  return (
    <View
      style={{
        width,
        height,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#7b6dd1",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width,
          padding: 20,
        }}
      >
        <Image source={require("@/assets/images/logo.png")} />
        <ButtonsTop />
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
        <View style={{ width: 309 }}>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 48,
              fontFamily: "IBM Plex Sans",
              color: "#7b6dd1",
              fontWeight: "bold",
              marginTop: 30,
            }}
          >
            Olá, {userName ? <Text style={{ color: "#f48080" }}>{userName}</Text> :  'Unknown user'}!
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#888888",
              fontWeight: "500",
              fontFamily: "IBM Plex Sans",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Selecione uma criança e consulte as últimas atualizações do <Text style={{fontFamily: "'B612 Mono', monospace", color: "#8093f4", fontWeight: 600}}>Guardião</Text>
            .
          </Text>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: "#7b6dd1",
            width: 309,
            marginBottom: 30,
          }}
        ></View>
        <View style={{width: 309}}>
          <Text
            style={{
              marginBottom: 20,
              color: "#888888",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: 'left'
            }}
          >
            Crianças:
          </Text>
        </View>
        <View>
          <ButtonCriancas />
          <ButtonGeral backgroundColor="#7B6DD1" text="+" width={332} height={66}/>
        </View>
      </View>
    </View>
  );
}
