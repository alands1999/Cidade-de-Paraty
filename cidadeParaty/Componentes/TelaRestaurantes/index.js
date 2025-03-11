import { View, Text, Image } from "react-native";
import estilos from "./estilo";

import Img01 from '../../assets/restaurantes/restaurante01.png';
import Img02 from '../../assets/restaurantes/restaurante02.png';
import Img03 from '../../assets/restaurantes/restaurante03.png';

export default function TelaRestaurantes(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo} >Bares e Restaurantes</Text>
            <Text style={estilos.texto} >O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos. </Text>

            <View style={estilos.card}>
                <Image source={Img01} style={estilos.img} />
                <Text style={estilos.tituloRestaurantes}>Armazén Mar</Text>
                <Text>Localização: Rod Rio-Santos</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Img02} style={estilos.img} />
                <Text style={estilos.tituloRestaurantes}>Bendita's Restaurante</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Img03} style={estilos.img} />
                <Text style={estilos.tituloRestaurantes}>SEREIA DO MAR PIZZA-BAR</Text>
                <Text>Localização: Praia do Jabaquara</Text>
            </View>
        </View>
    )
}