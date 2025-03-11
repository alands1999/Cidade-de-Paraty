import { View, Text, Image, Button } from "react-native";
import estilos from './estilo';

import Paraty from '../../assets/01.png'

export default function TelaInicial(props){
    return(
        <View style={estilos.container}>
            <View style={estilos.card}>

                <Text style={estilos.titulo}>Paraty</Text>
                <Text style={estilos.texto}>Saiba o que visitar em paraty.</Text>
                <Image source={Paraty} style={estilos.img} />

                <View style={estilos.box}>
                    <Button color="#372d00" title="Ver Restaurantes" onPress={ () => {props.navigation.navigate('Restaurantes')}} />
                    <Button color="#372d00" title="Ver Passeios" onPress={ () => {props.navigation.navigate('Passeios')}}  />
                    <Button color="#372d00" title="Ver Hospedagem" onPress={ () => {props.navigation.navigate('Hospedagem')}}  />
                </View>

            </View>
        </View>
    )
}