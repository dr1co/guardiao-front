import { View, useWindowDimensions } from "react-native";
import Logo from "@/components/Logo";
import ButtonPerfil from "@/components/ButtonPerfil";
import Title from "@/components/Title";
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
        <Logo />
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
        <View>
          <Title />
        </View>

        <View>
          <LoadingBar width={103}/>
        </View>

        <View>
          <SubTitle />
        </View>

        <View>
          <Link href="/conectar/crianca">
            <ButtonPerfil
              backgroundColor="#f480d4"
              title="CRIANÇA"
              text="A criança terá seu dispositivo 
monitorado pelo Guardião, capaz de identificar inseguranças online."
            />
          </Link>

          <Link href="/conectar/responsavel">
            <ButtonPerfil
              backgroundColor="#f48080"
              title="RESPONSÁVEL"
              text="O responsável terá acesso às atividades online da criança,
além de receber notificações diante de ameaças detectadas pelo Guardião."
            />
          </Link>
        </View>
      </View>
    </View>
  );
}