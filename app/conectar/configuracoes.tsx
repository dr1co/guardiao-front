import {
  View,
  useWindowDimensions,
  Image,
  Text,
  ScrollView,
} from "react-native";
import ButtonsTop from "@/components/ButtonsTop";
import MenuBar from "@/components/MenuBar";
import ContainerPerfil from "@/components/ContainerPerfil";
import ButtonConfig from "@/components/ButtonConfig";
import ButtonConfigSwitch from "@/components/ButtonConfigSwitch";

export default function TelaConfiguracoes() {
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
          

        <View style={{height: 730, marginTop: 20}}>
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
              Configurações
            </Text>
              </View>
              <ContainerPerfil />
              <Text style={{ color: '#f48080', fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>Conta</Text>
              <ButtonConfig text="Informações pessoais" imagePath={require('@/assets/images/user_icon.png')}/>
              <ButtonConfig text="Crianças conectadas" imagePath={require("@/assets/images/child.png")}/>
              <ButtonConfig text="Acessibilidade" imagePath={require('@/assets/images/acessibility.png')} />

              <Text style={{ color: '#f48080', fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginTop: 20}}>Privacidade & Segurança</Text>
              <ButtonConfig text="Gerenciar informações" imagePath={require('@/assets/images/config.png')}/>

              <Text style={{ color: '#f48080', fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginTop: 20}}>Permissões</Text>
              <ButtonConfigSwitch text="Notificações" imagePath={require('@/assets/images/notif.png')}/>
              <ButtonConfigSwitch text="Localização" imagePath={require('@/assets/images/local.png')}/>


              <Text style={{ color: '#f48080', fontSize: 15, fontWeight: 'bold', marginBottom: 10, marginTop: 20}}>Suporte</Text>
              <ButtonConfig text="Ajuda" imagePath={require('@/assets/images/help.png')} />
              <ButtonConfig text="Sobre o aplicativo" imagePath={require('@/assets/images/info.png')}/>
              <View style={{height: 100}}></View>
            </ScrollView>
          </View>
        </View>
      </View>

      <MenuBar />
      <View></View>
    </View>
  );
}
