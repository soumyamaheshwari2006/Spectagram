import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Feed{
    render() {
        return(
            <View style= {styles.container}>
            <Text style= {styles.text}>Feed</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        justifyContent: 'center',
        size: '25',
        fontType: 'bold'
    }
}); 