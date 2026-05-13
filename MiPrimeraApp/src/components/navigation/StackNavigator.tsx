
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabsNavigator";

//1. Declarar el tipádo para pantallas y sus parametros
export type RootStackParmList = {
    Login: undefined,
    Home: {email: string},
    UserTabs: undefined,
}
//2. Crear el stack navigator el cual va a manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParmList>();

// 3. Utilizar el stack  
export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: true}}>
            <Stack.Screen name="Login" component={LoginScreen} />   
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserTabs" component={TabNavigator} />
        </Stack.Navigator>
    )

}