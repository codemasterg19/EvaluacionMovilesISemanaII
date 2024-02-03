import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Estilo2 = () => {
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
        justifyContent: 'center'    
    },
    box1:{       
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'white',
        width:100,
        height:100,
        alignSelf: 'flex-start'
    },
    box2:{
        backgroundColor:'orange',
        borderWidth:2,
        borderColor: 'white',
        width:100,
        height:100,
        alignSelf: 'flex-start'
    },
    box3:{ 
        backgroundColor: 'cyan',
        borderWidth:2,
        borderColor: 'white',
        width: '100%',
        height:100,       
        alignSelf: 'flex-start',
    },


  })