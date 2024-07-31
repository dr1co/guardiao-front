import { View, TouchableOpacity, Image } from 'react-native';

export default function ButtonsTop() {
  return (
    <View>
      <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'white', borderRadius: 50, elevation: 5, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('@/assets/images/bell.png')}/>
      </TouchableOpacity>
      <View>

      </View>
    </View>
  );
}