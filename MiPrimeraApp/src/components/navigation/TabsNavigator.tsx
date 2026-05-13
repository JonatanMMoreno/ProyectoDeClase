import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/UserSettings/SettingsScreen";
import ProfileScreen from "../screens/UserSettings/ProfileScreen";

//1.declarar tipado para pantalla y sus parametros
type TabsParamList ={
    Profile: undefined;
    Settings: undefined;
}

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas.
const Tab = createBottomTabNavigator<TabsParamList>();

//3.utilizar el tab navigator
export default function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator> 
    );
}