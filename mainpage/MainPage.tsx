import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={require('../src/assents/camera.png')} style={styles.cameraPlaceholder} />
        </TouchableOpacity>
        <Text style={styles.cameraText}>Tire sua foto reciclando</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Empresas Parceiras</Text>
          <View style={styles.partnerContainer}>
            <View style={styles.partnerItem}>
              <TouchableOpacity onPress={() => { }}>
                <Image source={require('../src/assents/açai.png')} style={styles.partnerImage} />
              </TouchableOpacity>
              <Text style={styles.partnerPoints}>30 BeachCoins</Text>
              <Text style={styles.partnerDescription}>Resgate 30% de desconto no seu açai</Text>
            </View>
            <View style={styles.partnerItem}>
              <TouchableOpacity onPress={() => { }}>
                <Image source={require('../src/assents/corona.png')} style={styles.partnerImage} />
              </TouchableOpacity>
              <Text style={styles.partnerPoints}>50 BeachCoins</Text>
              <Text style={styles.partnerDescription}>Resgate uma corona grátis</Text>
            </View>
            <View style={styles.partnerItem}>
              <TouchableOpacity onPress={() => { }}>
                <Image source={require('../src/assents/oxxo.png')} style={styles.partnerImage} />
              </TouchableOpacity>
              <Text style={styles.partnerPoints}>75 BeachCoins</Text>
              <Text style={styles.partnerDescription}>Resgate 15% de desconto em produtos Oxxo</Text>
            </View>
            <View style={styles.partnerItem}>
              <TouchableOpacity onPress={() => { }}>
                <Image source={require('../src/assents/hurley.png')} style={styles.partnerImage} />
              </TouchableOpacity>
              <Text style={styles.partnerPoints}>100 BeachCoins</Text>
              <Text style={styles.partnerDescription}>Resgate 20% de desconto em produtos Hurley</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  topContainer: {
    height: '33%',
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  cameraPlaceholder: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cameraText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  section: {
    marginTop: -10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  partnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  partnerItem: {
    flexBasis: '48%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    alignItems: 'center',
  },
  partnerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  partnerPoints: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  partnerDescription: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
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
