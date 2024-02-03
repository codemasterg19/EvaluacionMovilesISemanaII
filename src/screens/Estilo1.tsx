import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Estilo1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
  )
}


const styles=StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#3498DB',
    },
    box1:{       
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'white',
        width:100,
        height:100,
        alignSelf: 'flex-end'
    },
    box2:{
        flex:2,
        backgroundColor:'orange',
        borderWidth:2,
        borderColor: 'white',
        width:100,
        height:100,
        alignSelf: 'flex-end'
     
    },
    box3:{
        backgroundColor: 'cyan',
        borderWidth:2,
        borderColor: 'white',
        width:100,
        height:100,
        alignSelf: 'flex-end',
    },


  })
