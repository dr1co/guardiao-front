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
        backgroundColor: "#f480d4",
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
              ao dispositivo pertencente ao{" "}
              <Text
                style={{
                  color: "#f48080",
                  fontFamily: '"B612 Mono", monospace',
                  fontWeight: "bold",
                }}
              >
                responsável
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

          <View
            style={{
              flexDirection: "row",
              width: 309,
              marginBottom: 50,
              marginTop: 30,
            }}
          >
            <View
              style={{ backgroundColor: "#f480d4", width: 3, height: 270 }}
            ></View>
            <View style={{ width: 280, marginLeft: 30, marginTop: 20 }}>
              <Text style={{ color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ marginBottom: 20 }}>
                    1. No dispositivo do responsável, abra o Guardião e
                    selecione a opção RESPONSÁVEL durante a configuração.
                  </Text>
                  <Text style={{ marginBottom: 20 }}>
                    2. Clique no botão de escaneamento no dispositivo do responsável para escanear o QR Code exibido no dispositivo da criança a partir do botão EXIBIR QR CODE.
                  </Text>
                  <Text style={{ marginBottom: 20 }}>
                    3. Aguarde a confirmação e a conexão estará completa.
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <ButtonEscanear backgroundColor="#f480d4" text="EXIBIR QR CODE" />
        </View>
      </View>
    </View>
  );
}