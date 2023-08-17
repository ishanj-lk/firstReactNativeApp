import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const signup = require('../assets/signup.png');

export default function SignUp({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={signup} />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Account Number"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your ID Number"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Preferred Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Temporary Password"
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.sUpBtn}>
                <Text style={styles.text}>Sign Up</Text>
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
        marginTop:5
    },
    sUpBtn: {
        elevation: 8,
        backgroundColor: "#0C356A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:50
    },
    text: {
        color:'#ffffff',
        fontSize:20
    }
  });