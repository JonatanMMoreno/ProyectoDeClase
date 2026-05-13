import { View } from "react-native";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { useState } from "react";

export default function LoginScreen({navigation}:any) {
   const [email, setEmail] = useState('');

    const handleLogin = ( ) => {
         try {
            navigation.navigate('Home', {email});
         } catch (error) {
                console.log(error);
         }
    }

    return(
        <View>
            <CustomInput 
            placeholder={"Ingresa tu Correo"} 
            value={email} 
            onChange={setEmail}/>
            <CustomInput type={"password"} 
            placeholder={"Ingresa tu Contraseña"} 
            value={""} 
            onChange={()=>{}}/>
            
            <CustomButton title={"Inciar Sesion"} 
            onPress={handleLogin}/>
        </View>
    )
}