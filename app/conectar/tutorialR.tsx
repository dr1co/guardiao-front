import { View, Text, useWindowDimensions, Image, TouchableOpacity } from "react-native";
import Logo from "@/components/Logo";
import LoadingBar from "@/components/LoadingBar";
import ButtonEscanearQR from "@/components/ButtonEscanearQR"
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
              textAlign: "center",
            }}
          >
            Como realizar a conexão?
          </Text>

          <View>
            <View
              style={{
                flexDirection: "row",
                width: 310,
                marginBottom: 35,
                marginTop: 30,
                backgroundColor: "white",
                borderRadius: 50,
                borderLeftColor: "#f48080",
                borderLeftWidth: 5,
                height: 330,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View style={{ width: 280, marginLeft: 20, marginTop: 10, flexDirection: "column" }}>
                
                    <Text style={{ marginBottom: 10, color: "#9d9ea1", fontSize: 15, fontWeight: 500  }}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontFamily: "B612 Mono, monospace",
                          fontWeight: "bold",
                          color: "#f48080",
                        }}
                      >
                        1.
                      </Text>{" "}
                      Instale o
                      <Text
                        style={{
                          color: "#8093f4",
                          fontFamily: "B612 Mono, monospace",
                        }}
                      >
                        {" "}
                        Guardião
                      </Text>{" "}
                      no dispositivo da
                      <Text style={{ color: "#f480d4" }}> criança</Text>.
                    </Text>
                    <Text style={{ marginBottom: 10, color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontFamily: "B612 Mono, monospace",
                          fontWeight: "bold",
                          color: "#f48080",
                        }}
                      >
                        2.
                      </Text>{" "}
                      Faça login no dispositivo da{" "}
                      <Text style={{ color: "#f480d4" }}>utilizando</Text> a
                      mesma conta do dispositivo do{" "}
                      <Text style={{ color: "#f48080" }}>responsável</Text>.
                    </Text>
                    <Text style={{ marginBottom: 10, color: "#9d9ea1", fontSize: 15, fontWeight: 500 }}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontFamily: "B612 Mono, monospace",
                          fontWeight: "bold",
                          color: "#f48080",
                        }}
                      >
                        3.
                      </Text>{" "}
                        Selecione a opção <Text style={{ color: '#f480d4', fontWeight: "bold" }}>CRIANÇA </Text>
                        durante a configuração do <Text
                        style={{
                          color: "#8093f4",
                          fontFamily: "B612 Mono, monospace",
                        }}
                      >Guardião</Text> no dispositivo da <Text style={{ color: '#f480d4' }}>criança</Text>.
                    </Text>
                    <Text style={{color: "#9d9ea1", fontSize: 15, fontWeight: 500}}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontFamily: "B612 Mono, monospace",
                          fontWeight: "bold",
                          color: "#f48080",
                        }}
                      >
                        4.
                      </Text>{" "}
                      <Text>
                        No dispositivo do <Text style={{color: '#f48080'}}>responsável</Text>, abra o <Text
                        style={{
                          color: "#8093f4",
                          fontFamily: "B612 Mono, monospace",
                        }}
                      >Guardião</Text> e escaneie o <Text style={{fontWeight: 'bold'}}>QR Code</Text> exibido no dispositivo da 
                      <Text style={{color: '#f480d4'}}> criança</Text> para completar a conexão.
                      </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <ButtonEscanearQR  />
        </View>
      </View>
    </View>
  );
}