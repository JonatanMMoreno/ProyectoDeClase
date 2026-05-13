import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParmList } from "../navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";


type Props = NativeStackScreenProps<RootStackParmList,'Home'>;

export default function HomeScreen({route}: Props){
    const {email} = route.params;

    return(
        <View>
                <StatusBar style="auto" />
            <Text>Bienvenido a Home</Text>
        </View>
    )

}