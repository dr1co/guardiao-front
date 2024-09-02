import { View, TouchableOpacity, Image } from 'react-native';

export default function ButtonsTop() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 130}}>
      <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('@/assets/images/bell.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 45, height: 45, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: 8}}>
        <Image source={require('@/assets/images/user_photo.png')}/>
      </TouchableOpacity>
      <View>

      </View>
    </View>
  );
}