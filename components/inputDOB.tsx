import { useState, Dispatch, SetStateAction } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
} from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { format } from 'date-fns';
//import { ptBR } from 'date-fns/locale';

// VERIFICAR SE É < 18 e > 6

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

interface DOBProps {
  date: string | undefined,
  setDate: Dispatch<SetStateAction<string | undefined>>
}

export default function inputDOB(props: DOBProps) {

  const [open, setOpen] = useState(false); // open and colses the modal
  const [textDate, setTextDate] = useState("Selecione a data de nascimento.")

  function handleOnPress() {
    setOpen(!open);
  }

  function handleOnChange(propDate: string) {
    props.setDate(propDate);

    const formattedDate = format(new Date(propDate), 'dd/MM/yyyy');
    setTextDate(formattedDate);
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
          {textDate}
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
            locale="pt-BR"
            selected={props.date}
            onDateChange={(e) => {
              handleOnChange(e);
            }}
            
            />
            <TouchableOpacity onPress={handleOnPress} style={{backgroundColor: '#f480d4', padding: 10, width: 350, borderRadius: 16 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center'}}>CONFIRMAR DATA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
