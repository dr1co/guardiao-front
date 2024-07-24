import { View, useWindowDimensions } from "react-native";
import Logo from "@/components/Logo";
import ButtonPerfil from "@/components/CustomButton";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import LoadingBar from "@/components/LoadingBar";

export default function TelaPerfilCrianca() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{backgroundColor: 'red'}}>
      <Logo/>
    </View>
  );
}