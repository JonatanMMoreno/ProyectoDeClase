
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";


//1. Declarar el tipádo para pantallas y sus parametros
type RootStackParmList = {
    Login: undefined,
    Home: {email: string},
}
//2. Crear el stack navigator el cual va a manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParmList>();

// 3. Utilizar el stack  
export default function StackNavigator(){
    return(
        <StackNavigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </StackNavigator>
    )

}