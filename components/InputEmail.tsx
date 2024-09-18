import { Dispatch, SetStateAction, useState } from 'react';
import{ TextInput, View, Image } from 'react-native';

type InputParameters = {
  borderBottomColor: string,
  placeholderTextColor: string,
  placeholder: string,
  imagePath: object,
  setVar: Dispatch<SetStateAction<string | undefined>>
}

export default function InputName(props: InputParameters) { 
  const [isValid, setIsValid] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleOnChange(text: string) {
    props.setVar(text);

    if (text.match(emailRegex)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
        maxLength={40}
        onChange={(e) => {handleOnChange(e.nativeEvent.text)}}
      />

      <View style={{ position: "absolute", marginLeft: 290, marginTop: 15 }}>
        <Image source={isValid? require('@/assets/images/ok_verde.png') : require("@/assets/images/ok_cinza.png")} />
      </View>
    </View>
  );

};

 