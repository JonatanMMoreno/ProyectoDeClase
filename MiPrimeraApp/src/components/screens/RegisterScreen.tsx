import { useState } from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton"
;

export default function RegisterScreen

export default function App() {
  //definicion de una variable de estado en ReactNative
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 
const [name, setName] = useState("");
const [phoneNumber, setPhonenumber] = useState("");


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      
      <CustomInput
      placeholder={"Ingresa tu nombre"} 
      value={name} 
      onChange={setName} />

      <CustomInput
      placeholder={"Ingresa tu numero de telefono"} 
      value={phoneNumber} 
      onChange={setPhonenumber} />

      <CustomInput
      type={"email"} 
      placeholder={'micorreo@gmail.com'} 
      value={email} 
      onChange={setEmail} />

      <CustomInput
      type={"password"} 
      placeholder={"Ingresa tu contraseña"} 
      value={password} 
      onChange={setPassword} />

      <CustomButton 
      title={"App"} 
      onPress={() => {
        console.log('Press desde boton App')
      }} 
      />
      <CustomButton 
      title={"Secondary Button "} 
      onPress={() => {
        console.log('Press desde boton Secundario')
      }} 
      variant = "secondary"
      />
      <CustomButton 
      title={"Tertiary Button"} 
      onPress={() => {
        console.log('Press desde boton App')
      }} 
      variant = "tertiary"
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});