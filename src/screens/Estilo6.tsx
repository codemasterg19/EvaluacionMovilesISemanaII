import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Estilo6 = () => {
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
        flex:1,      
        backgroundColor:'purple',
        borderWidth:7,
        borderColor: 'white',
    },
    box2:{   
        flex:2,    
        backgroundColor:'orange',
        borderWidth:7,
        borderColor: 'white',      
    },
    box3:{      
        flex:3, 
        backgroundColor: 'cyan',
        borderWidth:7,
        borderColor: 'white',
    },
  })
