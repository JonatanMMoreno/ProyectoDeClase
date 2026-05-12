import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStacksScreenProps<RootStackParamList,'Home'>;
export default function HomeScreen({route}: Props){
    const {} = route.

    return(
        <View>
            Bienvenido a Home
        </View>
    )

}