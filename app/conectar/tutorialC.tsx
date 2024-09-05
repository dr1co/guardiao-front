import { View, Text, useWindowDimensions, Image } from "react-native";
import Logo from "@/components/Logo";
import LoadingBar from "@/components/LoadingBar";
import ButtonEscanear from "@/components/ButtonGeral"
import ButtonBack from "@/components/ButtonBack";
import ButtonGerarQR from "@/components/ButtonGerarQR";

export default function TutorialCrianca() {
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
              textAlign: 'center'
            }}
          >
            Como realizar a conexão?
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: 310,
              marginBottom: 50,
              marginTop: 30,
              backgroundColor: "white",
              borderRadius: 50,
              borderLeftColor: "#f480d4",
              borderLeftWidth: 5,
            }}
          >
            
            <View style={{ width: 280, marginLeft: 20, marginTop: 20, flexDirection: "column" }}>
              
                  <Text style={{ marginBottom: 20, color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                    <Text style={{fontSize: 25, fontFamily: 'B612 Mono, monospace', fontWeight: 'bold', color:'#f480d4'}}>1.</Text> No dispositivo do <Text style={{color: '#f48080'}}>responsável</Text>, abra o <Text style={{color: '#8093f4', fontFamily: 'B612 Mono, monospace'}}>Guardião</Text> e
                    selecione a opção <Text style={{color: '#f48080', fontWeight: 600}}>RESPONSÁVEL</Text> durante a configuração.
                  </Text>
                  <Text style={{ marginBottom: 20, color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                  <Text style={{fontSize: 25, fontFamily: 'B612 Mono, monospace', fontWeight: 'bold', color:'#f480d4'}}>2.</Text> Clique no botão de escaneamento no dispositivo do <Text style={{color: '#f48080'}}>responsável</Text> para escanear o <Text style={{fontWeight: 600}}>QR Code</Text> exibido no dispositivo da <Text style={{color: '#f480d4'}}>criança</Text> a partir do botão <Text style={{color: '#f480d4', fontWeight: 600}}>EXIBIR QR CODE</Text>.
                  </Text>
                  <Text style={{ marginBottom: 20, color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                  <Text style={{fontSize: 25, fontFamily: 'B612 Mono, monospace', fontWeight: 'bold', color:'#f480d4'}}>3.</Text> Aguarde a confirmação e a conexão estará completa.
                  </Text>
               
            </View>
          </View>
        </View>
        <View>
          <ButtonGerarQR />
        </View>
      </View>
    </View>
  );
}