import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleEntrarPress = () => {
    navigation.navigate('Login');
  };

  const handleCadastrarPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assents/tartaruga.png")}
        style={styles.logo}
      />

      <Text style={styles.title}> Ajude nossas prais {"\n"} e resgate seu <Text style={styles.oceanBlueText}>BeachCoin</Text> </Text>
      <Text style={styles.subTitle}> Encontre a peça ideal para você </Text>

      <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
        
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={handleCadastrarPress}>
        <Text style={[styles.buttonText, styles.oceanBlueText]}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    marginBottom: 40,
    width: 280,
    height: 280,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  oceanBlueText: {
    color: '#0077be', 
  },
  subTitle: {
    marginTop: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#0077be', 
    paddingVertical: 15,
    paddingHorizontal: 105,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonOutline: {
    borderColor: '#0077be', 
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
