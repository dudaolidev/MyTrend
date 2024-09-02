import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

export default function MainPage({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('Todos');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {/* Topo da página com o título "MyTrend" */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MyTrend</Text>

        {/* Barra de pesquisa com ícone de lupa */}
        <View style={styles.searchContainer}>
          <Image source={require('../src/assents/lupa.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Título "Meu Guarda Roupas" alinhado à direita */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meu Guarda Roupas</Text>
        </View>

        {/* Linha com 5 opções de clique */}
        <View style={styles.optionsContainer}>
          {['Todos', 'Blusas', 'Calças', 'Shorts', 'Tenis'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === option && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Linha com 3 boxes de imagens */}
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image3.png')} style={styles.boxImage} />
            </View>
            <Text style={styles.boxText}>Definição 1</Text>
          </View>
          <View style={styles.boxMiddle}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image1.png')} style={styles.boxImageMiddle} />
            </View>
            <Text style={styles.boxTextMiddle}>Definição 2</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image3.png')} style={styles.boxImage} />
            </View>
            <Text style={styles.boxText}>Definição 3</Text>
          </View>
        </View>

        {/* Duas caixas abaixo das imagens */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.combineButton}>
            <Text style={styles.combineButtonText}>Combinar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newItemButton}>
            <Text style={styles.newItemButtonText}>+ Novo item</Text>
          </TouchableOpacity>
        </View>

        {/* Três novas caixas de imagens abaixo */}
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image3.png')} style={styles.boxImage} />
            </View>
            <Text style={styles.boxText}>Definição 4</Text>
          </View>
          <View style={styles.boxMiddle}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image1.png')} style={styles.boxImageMiddle} />
            </View>
            <Text style={styles.boxTextMiddle}>Definição 5</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.imageWrapper}>
              <Image source={require('../src/assents/image3.png')} style={styles.boxImage} />
            </View>
            <Text style={styles.boxText}>Definição 6</Text>
          </View>
        </View>
      </ScrollView>

      {/* Rodapé com navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('PerfilMain')}>
          <Image source={require('../src/assents/perfil.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../src/assents/casinha.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('ConfiguracaoMain')}>
          <Image source={require('../src/assents/engrenagem.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  section: {
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Ajusta o espaçamento horizontal
    backgroundColor: '#f0f0f0',
    alignItems: 'center', // Centraliza o texto
  },
  selectedOptionButton: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  selectedOptionText: {
    color: 'white',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  box: {
    width: '30%',
    height: 160, // Altura das caixas laterais
    backgroundColor: '#f0f0f0', // Fundo cinza claro
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  boxMiddle: {
    width: '35%', // Aumenta o tamanho da caixa do meio
    height: 190, // Aumenta a altura da caixa do meio
    backgroundColor: '#f0f0f0', // Fundo cinza claro
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  imageWrapper: {
    width: '80%',
    height: 100, // Define a altura da imagem menor
    marginBottom: 10, // Espaço entre a imagem e o texto
  },
  boxImage: {
    width: '100%',
    height: '120%',
    borderRadius: 10
  },
  boxImageMiddle: {
    width: '100%',
    height: '145%',
    borderRadius: 10
  },
  boxText: {
    fontSize: 14,
    textAlign: 'justify', // Alinha o texto à esquerda
    top: 16,
    width: '100%',
    fontWeight: 'bold'
  },
  boxTextMiddle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify', // Alinha o texto à esquerda
    top: 45,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  combineButton: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  combineButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },


  
  newItemButton: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 10,
  },
  newItemButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 40,
    height: 40,
  },
});
