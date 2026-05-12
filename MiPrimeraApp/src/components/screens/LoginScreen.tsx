import { View } from "react-native";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

export default function LoginScreen(navigation):any {
    const [email, setEmail] = use

    return(
        <View>
            <CustomInput placeholder={"Ingresa tu correo"}
            value={""}
            onChange={()=>{}}/>
            <CustomInput type={"Password"}
            value={""}
            onChange={()=>{}}/>
            <CustomButton title={"Ingresar"} onPress={()=>{}}/>
        </View>
    )
}