import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    img: {
        width: 300,
        height: 50,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#beceff',
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,    
    },
    texto: {
        textAlign: 'justify',
        marginBottom: 20, 
    },
    card: {
        backgroundColor: 'white',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#979797'
    },
    tituloCard: {
        fontWeight: 'bold',
        marginBottom: 5, 
        fontSize: 16, 

    }
})

export default estilos;