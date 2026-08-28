import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { router } from "expo-router";




export default function Contato(){
    return(
        
        
            <View style={s.screen}>
                <Text>Contato</Text>
                <View>
                    <View>
                        <Text>Nome</Text>
                        <TextInput placeholder="DIGITE SEU NOME" />
                    </View>
                    <View>
                        <Text>Mensagem</Text>
                        <TextInput placeholder="DIGITE O ASSUNTO" />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
                <View style={s.nav}>
                    <TouchableOpacity onPress={() => router.push("/unity")}>
                        <Image source={require('../assets/icons/Vector2.png')} style={s.img} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/card")}>
                        <Image source={require('../assets/icons/Vector.png')} style={s.img2} />
                    </TouchableOpacity>
                </View>
            </View>
    )
}
const s = StyleSheet.create({
    screen:{
        flex: 1,
        display: 'flex',
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
        }
})