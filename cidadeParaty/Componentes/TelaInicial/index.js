import { View, Text, Image, Button } from "react-native";
import estilos from './estilo';

import Paraty from '../../assets/01.png'

export default function TelaInicial(props){
    return(
        <View style={estilos.container}>
            <View style={estilos.card}>
                
                <Text style={estilos.titulo}>Paraty</Text>
                <Text>Saiba o que visitar em paraty.</Text>
                <Image source={Paraty} style={estilos.img} />
                <Button title="Ver Restaurantes" onPress={ () => {props.navigation.navigate('Restaurantes')}} />
                <Button title="Ver Passeios" onPress={ () => {props.navigation.navigate('Passeios')}}  />
                <Button title="Ver Hospedagem" onPress={ () => {props.navigation.navigate('Hospedagem')}}  />

            </View>
        </View>
    )
}