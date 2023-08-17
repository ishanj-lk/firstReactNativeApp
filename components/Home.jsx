import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList, TextInput, Image, Alert } from 'react-native';


const moneyTransfer = require('../assets/moneyTransfer.png');
const accountSettings = require('../assets/accountSettings.png');
const generalSettings = require('../assets/generalSettings.png');


export default function Home() {

  const payBillAlert = () =>
    Alert.alert('Confirm Payment', 'Do you want to proceed this payment ? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Payment Canceled'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('Payment Proceeded')},
    ]);

  return (
    <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
          <Text style={styles.greetingText}>Hi, Good Morning !</Text>
          <View style={styles.bankBalance}>
            <Text style={styles.balanceText}>Saving Balance - Rs.100,000</Text> 
          </View>
            <Text style={styles.activitiesHeading}>Your Activities</Text> 
            <View style={styles.activityContainer}>
              <FlatList
                data={[
                  {key: '10/08/23 Cell PLC - Online Reload Rs.100 - Debit'},
                  {key: '10/08/23 ABC PLC - Salary Income Rs.30000 - Credit'},
                  {key: '12/08/23 Bank - Saving Interest Rs.500 - Credit'},
                  {key: '13/08/23 Supermarket - Grocery Rs.2500 - Debit'},
                  {key: '14/08/23 Supermarket - Grocery Rs.500 - Debit'},
                  {key: '10/08/23 Cell PLC - Online Reload Rs.200 - Debit'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </View>
            <Text style={styles.activitiesHeading}>Main Options</Text>
            <View style={styles.activityContainer}>
              <View style={styles.oneOption}>
                <Image  source={moneyTransfer} />
                <Text style={styles.activitiesHeading}>Money Transfer</Text>
              </View>
              <View style={styles.oneOption}>
                <Image  source={accountSettings} />
                <Text style={styles.activitiesHeading}>Account Settings</Text>
              </View>
              <View style={styles.oneOption}>
                <Image  source={generalSettings} />
                <Text style={styles.activitiesHeading}>General Settings</Text>
              </View>
            </View>
            <Text style={styles.activitiesHeading}>Quick Bill Payments</Text>
            <View style={styles.activityContainer}>
              <TextInput
                  style={styles.input}
                  placeholder="Enter Vendor ID"
              />
              <TextInput
                  style={styles.input}
                  placeholder="Enter Your Bill Number"
              />
              <TextInput
                  style={styles.input}
                  placeholder="Enter Amount"
              />
              <TouchableOpacity style={styles.payBtn} onPress={payBillAlert}>
                <Text style={styles.balanceText}>Pay The Bill</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.balanceText}></Text>
          </ScrollView>
        </SafeAreaView>
    </View>
  );

}



const styles = StyleSheet.create({
  oneOptionTxt:{
    // display:''
  },
  oneOption:{
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor:'black',
    borderWidth:2,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign:'center',
    width:375,
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payBtn:{
    elevation: 8,
    backgroundColor: "#0C356A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginTop:10
},
  input:{
    borderColor:'black',
    borderWidth:2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign:'center',
    width:375,
    marginTop:10
},
  item:{
    fontSize:16,
    textAlign:'center'
  },
  greetingText:{
    fontSize:20,
    marginTop:20,
    color:'#0C356A'
  },
  balanceText:{
    fontSize:20,
    marginTop:0,
    color:'#ffffff',
    textAlign:'center'
  },
  bankBalance: {
    elevation: 8,
    backgroundColor: "#0C356A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
},
  activitiesHeading:{
    fontSize:20,
    marginTop:20,
  },
  activityContainer:{
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:2,
    borderRadius: 10,
    width:400,
    marginTop:20,
    paddingHorizontal:10,
    paddingVertical:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
