import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const login = require('../assets/login.png');

export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={login} />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Account Number"
            />
            <TouchableOpacity style={styles.otpBtn}>
                <Text style={styles.text}>Get OTP Code</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Enter OTP Password"
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.lInBtn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    image:{
        width: 100,
        height: 100,
        marginTop:120,
        marginBottom:60
    },
    input:{
        borderColor:'black',
        borderWidth:2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign:'center',
        width:300,
        marginTop:30
    },
    otpBtn: {
        elevation: 8,
        backgroundColor: "#0C356A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 80,
        marginTop:10
    },
    lInBtn:{
        elevation: 8,
        backgroundColor: "#0C356A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:10
    },
    text: {
        color:'#ffffff',
        fontSize:20
    }
  });