import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import dados from '@/assets/constants/mock';
import { Item } from '@/components/item';
export default function Card(){


    return(
        <View style={s.screen}>
            
            <ScrollView>
                <FlatList  
                data={dados} 
                renderItem={({item}) =>(
                        <Item picture={item.image} title={item.title} text={item.text}/>)}
                        ListHeaderComponent={() => (
                            <TouchableOpacity onPress={() => router.push("/")} style={s.button}>
                                <Text style={s.buttonText}>SAIR</Text>
                            </TouchableOpacity>
                        )}>
                </FlatList>
            </ScrollView>
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
        },
    button:{
        marginHorizontal: 36,
        marginVertical: 50,
        backgroundColor: '#343A40',
        alignItems:'center',
        paddingVertical: 12,
        width: 85,
        borderRadius: 10
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})