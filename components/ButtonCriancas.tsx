import { View, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffe1f0',
    borderRadius: 16,
    width: 332,
    height: 68,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 30
  }
}

);

export default function ButtonCriancas() {
  return(
    <View>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
}