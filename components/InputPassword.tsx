import { Dispatch, SetStateAction, useState } from 'react';
import{ TextInput, View, Image } from 'react-native';

type InputParameters = {
  borderBottomColor: string,
  placeholderTextColor: string,
  placeholder: string,
  imagePath: object,
  setVar: Dispatch<SetStateAction<string | undefined>>
}

export default function InputPassword(props: InputParameters) { 
  const [isValid, setValid] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{}|~.])[A-Za-z\d!@#$%^&*()_+=\-{}|~.]{8,}$/;

  function handleOnChange(password: string) {
    props.setVar(password);

    if (password.match(passwordRegex)) {
      setValid(true);
    } else {
      setValid(false);
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
        onChange={(e) => {handleOnChange(e.nativeEvent.text)}}
        secureTextEntry={true}
      />

      <View style={{ position: "absolute", marginLeft: 290, marginTop: 15 }}>
        <Image source={isValid? require("@/assets/images/ok_verde.png") : require('@/assets/images/ok_cinza.png')} />
      </View>
    </View>
  );

};

