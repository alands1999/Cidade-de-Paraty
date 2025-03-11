import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './Componentes/TelaInicial';
import TelaRestaurantes from './Componentes/TelaRestaurantes';
import TelaHospedagem from './Componentes/TelaHospedagem';
import TelaPasseios from './Componentes/TelaPasseios';

const Stack = createStackNavigator();

export default function App (){
  return(
      <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="Home" component={TelaInicial} />
            <Stack.Screen name="Restaurantes" component={TelaRestaurantes} />
            <Stack.Screen name="Hospedagem" component={TelaHospedagem} />
            <Stack.Screen name="Passeios" component={TelaPasseios} />

          </Stack.Navigator>
      </NavigationContainer>
  )
}