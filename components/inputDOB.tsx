import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
} from "react-native";
import DatePicker from 'react-native-modern-datepicker';


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function inputDOB() {

  const [open, setOpen] = useState(false); // open and colses the modal
  const [date, setDate] = useState<string>();

  function handleOnPress() {
    setOpen(!open);
  }

  function handleOnChange(propDate: string) {
    setDate(propDate);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          marginBottom: 10,
          position: "absolute",
          zIndex: 2,
          marginLeft: 15,
          marginTop: 16,
        }}
      >
        <Image source={require("@/assets/images/calendar.png")} />
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: 332,
          height: 58,
          borderWidth: 3,
          borderColor: "#f480d4",
          marginBottom: 40,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#f480d4", marginLeft: 50 }}>
          Selecione a data de nascimento.
        </Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          position: "absolute",
          zIndex: 2,
          marginLeft: 290,
          marginTop: 18,
        }}
      >
        <TouchableOpacity onPress={handleOnPress}>
          <Image source={require("@/assets/images/expand-arrow.png")} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker 
            mode='calendar'
            selected={date}
            onDateChange={(e) => {
              handleOnChange(e);
            }}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
