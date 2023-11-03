import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Contactos from './src/Contactos';
import CamaraQR from './src/CamaraQR';
import HoraTemp from './src/HoraTemp';
import LlamadoEmergencia from './src/LlamadoEmergencia'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contactos" component={Contactos} />
        <Stack.Screen name="CamaraQR" component={CamaraQR} />
        <Stack.Screen name="HoraTemp" component={HoraTemp} />
        <Stack.Screen name="LlamadoEmergencia" component={LlamadoEmergencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;