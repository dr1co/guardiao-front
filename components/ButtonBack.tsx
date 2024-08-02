import {Image, TouchableOpacity} from 'react-native';

export default function ButtonBack() {
  return (
    <TouchableOpacity>
      {" "}
      <Image source={require("@/assets/images/back.png")} />
    </TouchableOpacity>
  );
}