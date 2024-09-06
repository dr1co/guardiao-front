import {
  View,
  useWindowDimensions,
  Image,
  Text,
  ScrollView,
} from "react-native";
import ButtonsTop from "@/components/ButtonsTop";
import ButtonGeral from "@/components/ButtonGeral";
import MenuBar from "@/components/MenuBar";
import ContainerConteudo from "@/components/ContainerConteudo";

export default function TelaConteudo() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        width,
        height: height,
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
        <View
          style={{
            backgroundColor: "#e2e1ff",
            width,
            height,
            borderRadius: 50,
            alignItems: "center",
          }}
        >
          <View style={{ height: 730, marginTop: 20 }}>
            <ScrollView>
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
                  Conteúdo informativo
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 53,
                      height: 53,
                      backgroundColor: "white",
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: "#7B6DD1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={require("@/assets/images/commercial.png")} />
                  </View>

                  <Text
                    style={{
                      fontSize: 15,
                      color: "#888888",
                      fontWeight: "500",
                      fontFamily: "IBM Plex Sans",
                      marginTop: 20,
                      marginBottom: 20,
                      width: 250,
                      marginLeft: 10,
                    }}
                  >
                    Conheça os canais de denúncia de crimes cibernéticos contra
                    menores.
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 53,
                      height: 53,
                      backgroundColor: "white",
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: "#7B6DD1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={require("@/assets/images/literature.png")} />
                  </View>

                  <Text
                    style={{
                      fontSize: 15,
                      color: "#888888",
                      fontWeight: "500",
                      fontFamily: "IBM Plex Sans",
                      marginTop: 20,
                      marginBottom: 20,
                      width: 250,
                      marginLeft: 10,
                    }}
                  >
                    Aprenda, com artigos selecionados, mais sobre o mundo
                    virtual e a relação dos menores com ele.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 2,
                  backgroundColor: "#7b6dd1",
                  width: 309,
                  marginBottom: 30,
                }}
              ></View>
              <View
                style={{
                  width: 332,
                  height: 476,
                  backgroundColor: "white",
                  borderRadius: 16,
                  borderColor: "#7b6dd1",
                  borderWidth: 1,
                  padding: 20,
                }}
              >
                <View style={{ position: "absolute", top: -15, marginLeft: 250 }}>
                  <Image
                    source={require("@/assets/images/mark_denuncia.png")}
                  />
                </View>
                <Text
                  style={{ fontSize: 15, color: "#7b6dd1", fontWeight: "bold" }}
                >
                  Canais de denúncia
                </Text>

                <View>
                  <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text
                      style={{ fontSize: 15, color: "#888888", lineHeight: 24 }}
                    >
                      O Guardião oferece ferramentas de controle parental. É
                      papel do responsável identificar e denunciar crimes
                      virtuais contra crianças ou adolescentes que sejam
                      detectados como ameaças no aplicativo.
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{ fontSize: 15, color: "#888888", lineHeight: 24 }}
                    >
                      Clique no botão abaixo para verificar o site que contém
                      formas de denunciar crimes virtuais contra menores,
                      disponibilizado pelo Ministério de Justiça e Segurança
                      Pública através do programa “De boa na rede”.
                    </Text>
                  </View>
                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <ButtonGeral
                    backgroundColor="#f48080"
                    text="DENUNCIAR"
                    width={250}
                    height={60}
                  />
                </View>
              </View>

              <ContainerConteudo />
              <View style={{height: 200}}>

              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <MenuBar />
      <View></View>
    </View>
  );
}
