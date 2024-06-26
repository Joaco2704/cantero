/*//Login
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,} from 'react-native';
import Boton from "../prueba/componentes/boton";
import Input from "../prueba/componentes/input";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.caja}>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
          <Text style={styles.titulo}>Bienvenidos</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.cuenta}>¿No tenes cuenta?  
          <Pressable style={styles.registro}> Registrate</Pressable>
          </Text>
          <Text>{"\n"}</Text>
          <Text style={styles.letra}>Email</Text>
          <Input/>
          <Text style={styles.letra}>Contraseña</Text>
          <Input/>
          <Pressable style={styles.dori}>¿Olvidaste tu contraseña?</Pressable>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Boton/>
        </View >
    </View >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontFamily:'Arial',
  },
  caja:{
    backgroundColor: "#fff",
    borderRadius: 15,
    flex: 1,
    width: 500,
    height: 1000,
    marginRight: 650,
    padding: 10,
    margin: 10,
    fontFamily: 'Arial',
  },
  titulo:{
    
    marginLeft: 150,
    fontFamily: 'Arial',
    fontSize: 35,
  },
  cuenta:{
    marginLeft: 140,
    fontSize: 15,
    fontWeight: 650,
  },
  registro:{
    textDecorationLine: 'underline',
    color: "orange",
    
  },
  letra:{
    fontWeight: 580,
    marginLeft: 10,
  }, 
  dori:{
    fontSize: 15,
    fontWeight: 580,
    color: "orange",
  }
});
*/
// Login.js

// LoginScreen.js

import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../componentes/input';
import Boton from '../componentes/boton';


export default function PantallaLogin({ navigation }) {
  return (
   
    <View style={styles.container}>
       <View style={styles.caja}>
      <Text style={styles.titulo}>Bienvenido</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.cuenta}>¿No tienes cuenta?
      <Pressable style={styles.registro} onPress={() => navigation.navigate('Registro')}> Registrate</Pressable>
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.letra}>Email</Text>
      <Input/>
      <Text style={styles.letra}>Contraseña</Text>
      <Input/>
      <Pressable style={styles.dori}  onPress={() => navigation.navigate('Registro')}>¿Olvidaste tu contraseña?</Pressable>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Boton/>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontFamily:'Arial',
  },
  titulo: {
    marginLeft: 160,
    fontFamily: 'Arial',
    fontSize: 35,
  },
  registro: {
    textDecorationLine: 'underline',
    color: "orange",
    
  },
  caja:{
    backgroundColor: "#fff",
    borderRadius: 15,
    flex: 1,
    width: 500,
    height: 1000,
    marginRight: 650,
    padding: 10,
    margin: 10,
    fontFamily: 'Arial',
  },
  letra:{
    fontWeight: 580,
    marginLeft: 10,
  }, 
  dori:{
    fontSize: 15,
    fontWeight: 580,
    color: "orange",
  },
  cuenta:{
    marginLeft: 140,
    fontSize: 15,
    fontWeight: 650,
  },
});
