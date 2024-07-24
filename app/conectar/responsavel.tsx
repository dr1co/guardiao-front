import { View, useWindowDimensions, Image } from "react-native";
import Logo from "@/components/Logo";
import ButtonConfirmar from "@/components/ButtonConfirmar";
import Title from "@/components/Title";
import LoadingBar from "@/components/LoadingBar";

export default function TelaPerfilResponsavel() {
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
      <View style={{ backgroundColor: "#f48080" }}>
        <Logo />
      </View>

      <View style={{}}>
        <Image source={require("@/assets/images/family.png")} />
      </View>

      <View
        style={{
          backgroundColor: "#e2e1ff",
          height,
          width,
          borderRadius: 50,
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <View>
          <Title />
        </View>
        <LoadingBar width={206}/>
        <ButtonConfirmar backgroundColor="#f48080"/>
      </View>
        
      
    </View>
  );
}