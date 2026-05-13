import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParmList } from "../navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../CustomButton";


type Props = NativeStackScreenProps<RootStackParmList,'Home'>;

export default function HomeScreen({route, navigation}: Props){
    const {email} = route.params;
    const handleLoadSetting = () => {
            navigation.navigate('UserTabs');
    }

    return(
        <View>
                <StatusBar style="auto" />
            <Text>Hola {email}, Bienvenido a Home</Text>
            <CustomButton title={""} onPress={handleLoadSetting} />
        </View>
    )

}