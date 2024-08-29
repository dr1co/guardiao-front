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

export default function TelaPainel() {
  const { width, height } = useWindowDimensions();

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
              <Text style={{color: '#8093f4'}}>Painel de controle</Text> de <Text style={{ color: "#f480d4" }}>[ChildName]</Text>:
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
              Analise as atividades online e verifique ameaças detectadas pelo{" "}
              <Text
                style={{
                  fontFamily: "'B612 Mono', monospace",
                  color: "#8093f4",
                  fontWeight: 600,
                }}
              >
                Guardião
              </Text>
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
        </View>

        <ScrollView></ScrollView>

        <View>
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              width: "100%",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Image source={require("@/assets/images/update.png")} />
          </View>
          <ButtonGeral backgroundColor="#7B6DD1" text="" width={332} height={66}/>
        </View>
      </View>

      <MenuBar />
      <View></View>
    </View>
  );
}
