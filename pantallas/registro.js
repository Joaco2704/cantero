//Registro
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../componentes/input'
import Boton from '../componentes/boton';

export default function PantallaRegistro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.caja}>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.titulo}>Bienvenidos</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.cuenta}>Datos personales</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.letra}>Nombre completo</Text>
      <Input/>
      <Text style={styles.letra}>Número de telefono</Text>
      <Input/>
      <Text style={styles.letra}>Email</Text>
      <Input/>
      <Text style={styles.letra}>Contraseña</Text>
      <Input/>
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
    marginLeft: 150,
    fontFamily: 'Arial',
    fontSize: 35,
    color: 'orange',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  caja:{
    backgroundColor: "#fff",
    borderRadius: 15,
    flex: 1,
    width: 500,
    height: 1000,
    marginLeft: 700,
    padding: 10,
    margin: 10,
    fontFamily: 'Arial',
  },
  cuenta:{
    marginLeft: 170,
    fontSize: 17,
    fontWeight: 650,
  },
  letra:{
    fontWeight: 580,
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
