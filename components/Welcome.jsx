import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const bank = require('../assets/bank.png');

export default function Welcome({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={bank} />
            <TouchableOpacity onPress={()=> navigation.navigate("SignUp")} style={styles.sUpBtn}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.lInBtn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    image:{
        width: 150,
        height: 150,
        marginTop:180
    },
    sUpBtn: {
        elevation: 8,
        backgroundColor: "#0C356A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:70
    },
    lInBtn: {
        elevation: 8,
        backgroundColor: "#0C356A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:20
    },
    text: {
        color:'#ffffff',
        fontSize:20
    }
  });