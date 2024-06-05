import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function EsqueciSenha({ navigation }) {
  const [email, setEmail] = useState('');

  const handleEsqueciSenhaPress = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu email.');
      return;
    }

    // Aqui você pode adicionar a lógica para o envio do email de recuperação de senha

    Alert.alert('Sucesso', 'Instruções de recuperação de senha enviadas para seu email.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email de acesso"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TouchableOpacity onPress={handleEsqueciSenhaPress} style={styles.recuperarButton}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginTop: 5,
  },
  recuperarButton: {
    backgroundColor: '#0077be', 
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
