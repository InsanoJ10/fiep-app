import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";


export default function Card(){


    return(
        <View>
            <TouchableOpacity onPress={() => router.push("/")}>
                <Text>SAIR</Text>
            </TouchableOpacity>

            <Text>Cards</Text>
            <View style={s.nav}>
                <TouchableOpacity onPress={() => router.push("/contato")}>
                    <Image source={require('../assets/icons/Vector2.png')} style={s.img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/unity")}>
                    <Image source={require('../assets/icons/Vector.png')} style={s.img2}/>
                </TouchableOpacity>
                
                
            </View>
        </View>
    )
}

const s = StyleSheet.create({
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
        }
})