import { View, Text, Image } from "react-native";

import estilos from "./estilo";

import Img01 from '../../assets/hospedagens/hospedagem01.png';
import Img02 from '../../assets/hospedagens/hospedagem02.png';
import Img03 from '../../assets/hospedagens/hospedagem03.png';


export default function TelaHospedagem(){
    return(
        <View style={estilos.container}>
        <Text style={estilos.titulo} >Pousadas e Hotéis em Paraty</Text>
        <Text style={estilos.texto} >Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo. </Text>

        <View style={estilos.card}>
            <Image source={Img01} style={estilos.img} />
            <Text style={estilos.tituloCard}>Pousada Missanga</Text>
            <Text>Valor médio: R$ 350,00</Text>
            <Text>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>

        <View style={estilos.card}>
            <Image source={Img02} style={estilos.img} />
            <Text style={estilos.tituloCard}>Pousada Morro do Forte</Text>
            <Text>Valor médio: R$ 450,00</Text>
            <Text>Localização: Próximo à Praia - Pontal</Text>
        </View>

        <View style={estilos.card}>
            <Image source={Img03} style={estilos.img} />
            <Text style={estilos.tituloCard}>Pousada Porto Imperial</Text>
            <Text>Valor médio: R$ 550,00</Text>
            <Text>Localização: Centro Histórico</Text>
        </View>
    </View>
    )
}