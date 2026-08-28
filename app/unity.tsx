import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";




export default function Unity(){
    return(
        
        <View style={s.screen}>
            <Image style={s.image} source={require('@/assets/images/img.png')} />
            <Text style={s.text}>A sede da FIEP fica na Avenida Cândido de Abreu, 200, no Centro Cívico, em Curitiba. O Sistema Fiep também possui um grande complexo de inovação e serviços conhecido como Campus da Indústria, localizado na Avenida Comendador Franco, 1341, 
            no Jardim Botânico.</Text>
            
            <View style={s.nav}>
                    <TouchableOpacity onPress={() => router.push("/card")}>
                        <Image source={require('../assets/icons/Vector2.png')} style={s.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/contato")}>
                        <Image source={require('../assets/icons/Vector.png')} style={s.img2} />
                    </TouchableOpacity>
                </View>
        </View>
        
    )
}

const s = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#6C757D'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        margin: 25
    },
     nav:{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#343A40',
        width:'100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
    },
    img:{
            backgroundColor:'#ADB5BD',
    },
    img2:{
            backgroundColor:'#ADB5BD',
    },
    image:{
           width:"100%",
    },
})