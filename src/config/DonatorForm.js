import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';



function Donate(props) {
    const [adress, setAdress] = useState('');
    const [city, setCity] = React.useState('');
    const [contact, setContact] = useState('');
    const [group, setGrp] = useState('');
    const [name, setName] = useState();
    const [email, setEmail] = useState('');

    var user = props.route.params.pro
    let uid = user.uid
    

    useEffect(()=>{
        setName(user.displayName)
        setEmail(user.email)
      },[])

    let data = {
        name,
        contact,
        email,
        group,
        adress,
        city,
        uid
    }
    
    


    const handleClick = () =>{
        if ((name == '') || (contact == '') || (email == '') || (group == '') || (adress == '') || (city == '')){
            alert("No Field should be empty")
        }else{
            database().ref('users').child(uid).set(data)
            .then(
                alert('You become Donar'),
                props.navigation.navigate('Home' )
            )
        }
      }



    return (
        <View>
            <ScrollView>
                <View style={styles.regForm}>
                    <Text style={styles.header}>Register Yourself to Donate</Text>

                    <TextInput value={user.displayName} style={styles.textInput} placeholder="Your Name" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />
                    <TextInput onChangeText={text => setGrp(text)} style={styles.textInput} placeholder="Your Blood Group" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />
                    <TextInput onChangeText={text => setAdress(text)} style={styles.textInput} placeholder="Your Adress" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />
                    <TextInput onChangeText={text => setCity(text)} style={styles.textInput} placeholder="Your City" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />
                    <TextInput onChangeText={text => setContact(text)} style={styles.textInput} placeholder="Your Contact" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />
                    <TextInput value={user.email} style={styles.textInput} placeholder="Your Email" placeholderTextColor='#fff' underlineColorAndroid={'transparent'} />

                    <TouchableOpacity style={styles.btn}
                        onPress={handleClick}>
                        <Text style={styles.btnTxt}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}
export default Donate;

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CC0000',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 30,
        padding: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#fafafa',
        borderBottomWidth: 2,
        fontWeight: 'bold'
    },
    textInput: {
        color: '#fff',
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#fafafa',
        borderBottomWidth: 1
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 30
    },
    btnTxt: {
        fontWeight: 'bold'
    },

})