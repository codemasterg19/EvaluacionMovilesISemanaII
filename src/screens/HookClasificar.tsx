import React, { useState } from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const HookClasificar = () => {


const [numeros, setNumeros] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
const [numerosPares, setnumerosPares] = useState<number[]>([]);
const [numerosImpares, setnumerosImpares] = useState<number[]>([]);
const [mostrarNumeros, setMostrarNumeros] = useState(false);

const clasificaNumeros = () =>{
    const pares = numeros.filter((numero)=> numero %2 == 0);
    const impares = numeros.filter((numero)=> numero % 2 !==0)
    
    setnumerosPares(pares);
    setnumerosImpares(impares);
    setMostrarNumeros(true);
}


  return (
    <View style={styles.container}>
        <View style={styles.tittle}>
        <Text style={styles.titulo2}>Clasificar Números</Text>
        <Text style={styles.numeros}> Arreglo de números{'\n'}  {numeros.join(', ')}</Text>
        </View>
        
        
        <TouchableOpacity style={styles.numeros}  onPress={clasificaNumeros}>
            <Text style={styles.button}>Clasificar</Text>
        </TouchableOpacity>

        {mostrarNumeros && (
        <>
        
        <Text style={styles.clasificados}>Números Pares: {'\n'} {numerosPares.join(', ')}</Text>
        <Text style={styles.clasificados}>Números Impares: {'\n'} {numerosImpares.join(', ')}</Text>
        
        </>
        )}
    </View>
  )
}


//estilos para el componente

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tittle: {
      marginBottom: 20,
    },
    titulo2: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'blue',
      textAlign:'center'
    },
    numeros: {
      fontSize: 16,
      marginVertical: 10,
    },
    button: {
      fontSize: 20,
      color: 'white',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      elevation:5
    },
    clasificados: {
      fontSize: 16,
      marginVertical: 10,
    },
  });