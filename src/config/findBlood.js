import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';



function FindBlood(props) {
    let grp = props.route.params.grp


    
var detail
    
    
    database()
        .ref('users')
        .once('value')
        .then(snapshot => {
            let data = snapshot.val()
            detail = Object.keys(data).map((key, index)=>data[key])
            
        })
        .catch(error => alert("network problem"))

    return(
        <View>
            <Text style={styles.head}>
                Availible {grp} Donars
            </Text>
            <View>
               {detail}
            </View>
        </View>
        )
}
export default FindBlood;
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 20,
    },
    head:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign:'center',
    }
})