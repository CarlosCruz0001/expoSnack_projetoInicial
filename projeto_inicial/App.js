import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';


//pacote de icones: https://oblador.github.io/react-native-vector-icons/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> Hello World! </Text>
      <Text style={styles.text}> {'\n'} Esse é meu primeiro app</Text>
      <Text style={styles.textClass}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
        diam, efficitur sit amet neque ac, ornare rhoncus tortor. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Ut erat velit, dictum ut risus sit amet, accumsan semper massa.
        Suspendisse ut mollis neque, tempus scelerisque mauris.
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={'senha'}
        inputMode="decimal"
        maxLength={6}
        secureTextEntry={true}
      />
      <TextInput style={styles.textInput} placeholder={'pesquise'} />
     
      <TouchableOpacity style={styles.styleButton}>
      <Feather name="user" size={40} color='#fff' />
      <Text style={styles.buttonText}> Clique aqui usuário </Text>

      </TouchableOpacity>
      
      <Button title="Clique aqui para iniciar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5274',
    padding: 8,
    paddingTop: 20,
  },

  textTitle: {
    fontSize: 60,
    fontWeight: 900,
    color: '#e3e1b1',
    alignSelf: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 200,
    color: '#e8cc9c',
    alignSelf: 'center',
  },

  textClass: {
    fontSize: 15,
    fontWeight: 200,
    color: '#e8cc9c',
    marginTop: 50,
    textAlign: 'justify',
  },


  styleButton:{
    backgroundColor:"red",
    marginTop:16,
    backgroundColor:'#e4a691',
    padding:16,
    borderRadius: 6,
    justifyContent:"center",
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    width: 200,
    alignSelf:'center',
  },

  textInput: {
    marginTop: 20,
    borderWidth: 1,
    borderBlockColor: '#000',
    borderRadius: 20,
    backgroundColor: '#ce938b',
    height: 30,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
    textAlign: 'center',
  },

  buttonText:{
    fontSize: 12,
    color: '#fff',
  },
});
