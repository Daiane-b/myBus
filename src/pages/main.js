import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

export default class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
            <TextInput
            style={{height: 40}}
            placeholder="Vai para onde?"
            onChangeText={() => {}}
        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fafafa",
    }
})