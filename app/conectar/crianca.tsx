import { View, useWindowDimensions, Image, Text } from "react-native";
import Logo from "@/components/Logo";
import LoadingBar from "@/components/LoadingBar";
import ButtonBack from "@/components/ButtonBack";
import InputName from "@/components/InputName";
import ButtonConfirmar from "@/components/ButtonConfirmar";
import InputDOB from "@/components/inputDOB";
import { router } from "expo-router";
import { useState } from "react";
import { createChildRegister } from "@/api/axiosInstance";

export default function TelaPerfilCrianca() {
  // Setando variáveis a partir das props nos componentes 
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<string>();
  const { width, height } = useWindowDimensions();

  const handleRegister = async () => {
    if (name && date) {
      try {
        const data = { name, dob: date }; // deve conter mesmo nome no back-end
        const result = await createChildRegister(data);
        alert('Criança criada com sucesso!');
        router.navigate("/conectar/tutorialC");
      } catch(error: any) {
        alert('Erro ao criar a Criança' + error.message)
      }
      
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

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

      <View style={{ position: "absolute", zIndex: 1, marginTop: 160 }}>
        <Image source={require("@/assets/images/family.png")} />
      </View>

      <View
        style={{
          backgroundColor: "#e2e1ff",
          height,
          width,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <View
          style={{
            marginBottom: 30,
            marginTop: 60,
            width: 340,
            height: 96,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginBottom: 45 }}>
            <ButtonBack />
          </View>

          <Text
            style={{
              fontSize: 24,
              lineHeight: 48,
              fontFamily: "IBM Plex Sans",
              color: "#7b6dd1",
              fontWeight: "bold",
              width: 290,
            }}
          >
            Qual é o
            <Text
              style={{
                color: "#f480d4",
                fontFamily: '"B612 Mono", monospace',
                fontWeight: "bold",
              }}
            >
              {" "}
              nome
            </Text>{" "}
            e a{" "}
            <Text
              style={{
                color: "#f480d4",
                fontFamily: '"B612 Mono", monospace',
                fontWeight: "bold",
              }}
            >
              data de nascimento 
            </Text> da criança?
          </Text>
        </View>
        <View style={{marginBottom: -10}}>
          <LoadingBar width={206} />
        </View>
        <View style={{ marginBottom: -20 }}>
          <InputName
            imagePath={require("@/assets/images/baby.png")}
            placeholder="Digite o nome."
            borderBottomColor="#f480d4"
            placeholderTextColor="#f480d4"
            setVar={setName}
          />
        </View>
        <InputDOB date={date} setDate={setDate} />
          <ButtonConfirmar text="CONFIRMAR" backgroundColor="#f480d4" onPress={handleRegister}/>
        
      </View>
    </View>
  );
}
