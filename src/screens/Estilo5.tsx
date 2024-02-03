import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Estilo5 = () => {
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1:{          
        backgroundColor:'purple',
        borderWidth:7,
        borderColor: 'white',
        width:100,
        height:'100%',
    },
    box2:{       
        backgroundColor:'orange',
        borderWidth:7,
        borderColor: 'white',
        width:100,
        height:'100%',       
    },
    box3:{       
        backgroundColor: 'cyan',
        borderWidth:7,
        borderColor: 'white',
        width: 100,
        height:'100%',
    },
  })
