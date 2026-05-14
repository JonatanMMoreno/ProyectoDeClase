import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/UserSettings/SettingsScreen";
import ProfileScreen from "../screens/UserSettings/ProfileScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:"#520a20"
            }}>
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
                title:"Mi Perfil",
                tabBarIcon: ({color, size})=> (
                    <Ionicons name="person" size = {size} color = {color}/>
                ),
            }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                title: "Configuraciones",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings" size = {size} color = {color}/>
                )
            }}
            />
        </Tab.Navigator> 
    );
}