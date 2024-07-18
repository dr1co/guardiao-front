import { View, Text, Image } from "react-native";

export default function Logo() {
  return (
    <View>
      <Image source={require('@/assets/images/logo.png')}/>
      <Text>Guardião</Text>
    </View>
  );
}