import { View, Text, useWindowDimensions, Image } from "react-native";
import Logo from "@/components/Logo";
import LoadingBar from "@/components/LoadingBar";
import ButtonEscanear from "@/components/ButtonGeral"
import ButtonBack from "@/components/ButtonBack";

export default function TutorialResponsavel() {
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
      <View>
        <Logo></Logo>
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
            width: 340,
            flexDirection: "row",
            marginBottom: 30,
            marginTop: 60,
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 15 }}>
            <ButtonBack />
          </View>
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontSize: 24,
                lineHeight: 48,
                fontFamily: "IBM Plex Sans",
                color: "#7b6dd1",
                fontWeight: "bold",
              }}
            >
              Conecte o{" "}
              <Text
                style={{
                  color: "#8093f4",
                  fontFamily: '"B612 Mono", monospace',
                  fontWeight: "bold",
                }}
              >
                Guardião
              </Text>{" "}
              ao dispositivo pertencente à{" "}
              <Text
                style={{
                  color: "#f480d4",
                  fontFamily: '"B612 Mono", monospace',
                  fontWeight: "bold",
                }}
              >
                criança
              </Text>
              .
            </Text>
          </View>
        </View>
        <View>
          <LoadingBar width={309} />
        </View>
        <View>
          <Text
            style={{
              color: "#9d9ea1",
              fontFamily: "IBM Plex Sans",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Como realizar a conexão?
          </Text>

          <View style={{ flexDirection: "row", width: 309, marginBottom: 40, marginTop: 30 }}>
            <View
              style={{ backgroundColor: "#f48080", width: 3, height: 309 }}
            ></View>
            <View style={{ width: 280, marginLeft: 30, marginTop: 20 }}>
              <Text style={{ color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{marginBottom: 20}}>1. Instale o Guardião no dispositivo da criança.</Text>
                  <Text style={{marginBottom: 20}}>
                    2. Faça login no dispositivo da criança usando a mesma conta
                    do dispositivo do responsável.
                  </Text>
                  <Text style={{marginBottom: 20}}>
                    3. Selecione a opção CRIANÇA durante a configuração do
                    Guardião no dispositivo da criança.
                  </Text>
                  <Text style={{marginBottom: 20}}>
                    4. No dispositivo do responsável, abra o Guardião e escaneie
                    o QR Code exibido no dispositivo da criança para completar a
                    conexão.
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <ButtonEscanear backgroundColor="#f48080" text="ESCANEAR QR CODE" />
        </View>
      </View>
    </View>
  );
}