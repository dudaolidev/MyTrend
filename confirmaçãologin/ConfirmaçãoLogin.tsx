import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

export default function ConfirmaçãoLogin({ navigation }) {
  const handleEntrarPress = () => {
    navigation.navigate('ConfirmaçãoLogin');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../src/assents/checkverde1.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Login realizado com sucesso!</Text>
      <TouchableOpacity>
        <Text style={styles.linkText}>Continuar para página inicial</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  linkText: {
    color: '#0077be',
    fontSize: 16,
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#0077be',
    width: '51%', 
    marginTop: 1, 
    marginBottom: 20, 
  },
});