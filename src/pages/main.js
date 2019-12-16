import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

export default class Main extends Component{
    render(){
        return(
                    <TextInput
                    placeholder="Vai para onde?"
                    onChangeText={() => {}}/>
        );
    }
}