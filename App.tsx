import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './firstpage/HomeScreen';
import LoginPage from './login/LoginPage';
import Cadastro from './cadastro/Cadastro';
import ConfirmaçãoLogin from './confirmaçãologin/ConfirmaçãoLogin';
import EsqueciSenha from './esquecisenha/EsqueciSenha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ConfirmaçãoLogin" component={ConfirmaçãoLogin} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

