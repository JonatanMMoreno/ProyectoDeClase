import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigation/StackNavigator';
import { navigationRef } from './src/components/navigation/NavigationService';

export default function App(){
  return(
    <NavigationContainer ref={navigationRef}>
        <StackNavigator/>
    </NavigationContainer>
  )

}


