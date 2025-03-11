import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e3e4'
    },
    img: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    card: {
        width: 320,
        backgroundColor: 'white',
        padding: 10,
        borderColor: "#979797",
        borderWidth: 1,
        borderRadius: 5,

    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,

    },
    texto: {
        textAlign: 'center',
        marginBottom: 10,
    },
    box: {
        gap: 10,
    },
    
})

export default estilos;