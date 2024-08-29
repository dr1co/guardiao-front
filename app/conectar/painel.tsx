import { View, useWindowDimensions, Image, Text, ScrollView } from "react-native";
import ButtonsTop from "@/components/ButtonsTop";
import ButtonGeral from "@/components/ButtonGeral";
import MenuBar from "@/components/MenuBar";

export default function TelaInicio() {
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
         
          

        <ScrollView>
        
        </ScrollView>

        <View>
          <View style={{ position: "absolute", zIndex: 2, width: '100%', alignItems: 'center', marginTop: 15 }}>
            <Image source={require("@/assets/images/update.png")} />
          </View>
          <ButtonGeral backgroundColor="#7B6DD1" text="" />
        </View>
      </View>


      <MenuBar/>
      <View>
        
      </View>
    </View>

    
  );
}
