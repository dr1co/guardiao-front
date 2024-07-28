import{ TextInput, View, Image } from 'react-native';

type InputParameters = {
  borderBottomColor: string,
  placeholderTextColor: string
}

export default function InputName(props: InputParameters) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{
          backgroundColor: 'white',
          width: 332,
          height: 48,
          marginBottom: 40,
          borderBottomWidth: 3,
          borderBottomColor: props.borderBottomColor
        }}
        placeholder="Digite seu nome"
        placeholderTextColor={props.placeholderTextColor} 
      ></TextInput>
    </View>
  );

};