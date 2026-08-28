import {ImageSourcePropType, View, Image, Text, StyleSheet} from "react-native"

export const Item = ({picture, title, text} : {picture: ImageSourcePropType, title: string, text: string}) => {
    return(
        <View style={s.container}>
            <Image source={picture} style={s.image}/>
            <View>
                <Text style={s.titulo}>{title}</Text>
                <Text style={s.texto}>{text}</Text>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor:'#212529',
        marginHorizontal: 30,
        marginBottom: 44,
    },
    image:{
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    titulo:{
        color:"white",
        fontSize: 32,
        fontWeight: "bold",
        margin: 21,
        textTransform: "uppercase"
    },
    texto:{
        color: 'white',
        fontWeight: "bold",
        margin: 21,
    }
})