import { View } from "react-native";
import Logo from "@/components/Logo";
import ButtonPerfil from "@/components/ButtonPerfil";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";

export default function TelaPerfil() {
  return (
    <View>
      <View style={{backgroundColor: "#7b6dd1"}}>
        <Logo/>
      </View>

      <View style={{backgroundColor: "#e2e1ff"}}>
        <View>
          <Title/>
        </View>
        <View>
          <SubTitle/>
        </View>

        <View>
          <ButtonPerfil/>
          <ButtonPerfil/>
        </View>
      </View>
      
    </View>
    
  );
}