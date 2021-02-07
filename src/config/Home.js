import React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


function Home(props){
    var user = props.route.params.pro
    return(
        <View style={styles.main}>
                <TouchableOpacity style={styles.btn}
                    onPress={()=>props.navigation.navigate('Donate', {pro: user} )}
                >
                        <Text style={styles.btnTxt}>Become Donar</Text>
                </TouchableOpacity>
            <ScrollView >

                <View style={styles.scroll}>
                    <Text style={styles.upperText}>
                        Select your required blood gruoup
                    </Text>
                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "A+"} )}>
                        <Text style={styles.detail}>
                            A+
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "A-"} )}>
                        <Text style={styles.detail}>
                            A-
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "B+"} )}>
                        <Text style={styles.detail}>
                            B+
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "B-"} )}>
                        <Text style={styles.detail}>
                            B-
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "O+"} )}>
                        <Text style={styles.detail}>
                            O+
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "O-"} )}>
                        <Text style={styles.detail}>
                            O-
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "AB+"} )}>
                        <Text style={styles.detail}>
                            AB+
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.group}
                        onPress={()=>props.navigation.navigate('FindBlood', {grp: "AB-"} )}>
                        <Text style={styles.detail}>
                            AB-
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#f7cbcb'
    },
    upperText:{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    scroll: {
        alignItems: 'center'
                

    },
    group:{
        borderColor:'#cc0000',
        borderBottomWidth: 3,
        borderRightWidth: 1,
        margin: 15,
        height: 50,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail:{
        color: '#CC0000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#CC0000',
        
        marginTop: 10,
        marginBottom:10

    },
    btnTxt:{
        fontWeight: 'bold',
        color: '#fff'
    },
})


export default Home;