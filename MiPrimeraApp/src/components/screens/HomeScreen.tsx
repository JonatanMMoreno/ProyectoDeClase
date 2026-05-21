import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParmList } from "../navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../CustomButton";
import { useAuth } from "../contexts/AuthContext";


type Props = NativeStackScreenProps<RootStackParmList,'Home'>;

export default function HomeScreen({route, navigation}: Props){

    const {user} = useAuth();


    const {email} = route.params;
    const handleLoadSetting = () => {
            navigation.navigate('UserTabs');
    }

    return(
        <View>
                <StatusBar style="auto" />
            <Text>Hola {user?.email}, Bienvenido a Home</Text>
            <CustomButton title={"Hola"} onPress={handleLoadSetting} />
        </View>
    )

}