import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from "react-native";



export default function Home() {
  return (
    
    <View style={s.container}>
        <ImageBackground source={require('../assets/images/capa.png')} resizeMode="cover" style={s.image}>
        <Image source={require('../assets/images/logo.png')} style={s.logo}>
        <TouchableOpacity style={s.btn}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
       </ImageBackground>
    </View>
  );
}
const s = StyleSheet.create({
    container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btn:{

  },
  logo:{

  },

});
