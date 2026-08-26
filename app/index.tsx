import { router } from "expo-router";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from "react-native";



export default function Home() {
  return (
    
    <View style={s.container}>
        <ImageBackground source={require('../assets/images/capa.png')} resizeMode="cover" style={s.image}>
                <Image style={s.logo} source={require('../assets/images/logo.png')}/>
                <TouchableOpacity style={s.btn} onPress={() => router.push("/card")}>
                    <Text style={s.btnText}>ENTRAR</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  logo:{
    alignSelf: "center",
  },
  btn:{
    alignSelf: "center",
    backgroundColor: '#084887',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 500
  },
  btnText:{
    color: '#ffffff',
    fontWeight: 'bold'
  }
})