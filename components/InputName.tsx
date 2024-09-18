import { Dispatch, SetStateAction } from 'react';
import{ TextInput, View, Image } from 'react-native';

type InputParameters = {
  borderBottomColor: string,
  placeholderTextColor: string,
  placeholder: string,
  imagePath: object,
  setVar: Dispatch<SetStateAction<string | undefined>>
}

export default function InputName(props: InputParameters) { 
  function handleOnChange(text: string) {
    props.setVar(text);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ position: "absolute", marginLeft: 12, marginTop: 10 }}>
        <Image source={props.imagePath} />
      </View>

      <TextInput
        style={{
          backgroundColor: "white",
          width: 332,
          height: 58,
          marginBottom: 40,
          borderBottomWidth: 3,
          borderBottomColor: props.borderBottomColor,
          paddingLeft: 55,
        }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType="visible-password"
        onChange={(e) => {handleOnChange(e.nativeEvent.text)}}
      />

      <View style={{ position: "absolute", marginLeft: 290, marginTop: 15 }}>
        <Image source={require("@/assets/images/ok_verde.png")} />
      </View>
    </View>
  );

};

// fazer aparecer icon ok somente depois da verificação do input