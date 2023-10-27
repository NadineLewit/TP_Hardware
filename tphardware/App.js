import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Contactos from './src/Contactos';
import QR from './src/QR';
import Camara from './src/Camara';
import HoraTemp from './src/HoraTemp';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contactos" component={Contactos} />
        <Stack.Screen name="QR" component={QR} />
        <Stack.Screen name="Camara" component={Camara} />
        <Stack.Screen name="HoraTemp" component={HoraTemp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;