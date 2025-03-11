import { View, Text, Image } from "react-native";
import estilos from "./estilo";

import Img01 from '../../assets/passeios/passeio01.png';
import Img02 from '../../assets/passeios/passeio02.png';
import Img03 from '../../assets/passeios/passeio03.png';



export default function TelaPasseios(){
    return(
        <View style={estilos.container}>
        <Text style={estilos.titulo} >Passeios em Paraty</Text>
        <Text style={estilos.texto} >O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja exemplos: </Text>

        <View style={estilos.card}>
            <Text style={estilos.tituloCard}>Tirolesa</Text>
            <Image source={Img01} style={estilos.img} />
        </View>

        <View style={estilos.card}>
            <Text style={estilos.tituloCard}>Rafting</Text>
            <Image source={Img02} style={estilos.img} />
        </View>

        <View style={estilos.card}>
            <Text style={estilos.tituloCard}>Canoagem no mangue</Text>
            <Image source={Img03} style={estilos.img} />
        </View>
    </View>
    )
}