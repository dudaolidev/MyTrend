import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PerfilMain() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundOverlay} />
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={require('../src/assents/EU.png')}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Gustavo Nunes</Text>
          <Text style={styles.birthdateText}>26/04/2004</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>107 BeachCoins</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>27 semanas de uso</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>46 recompensas resgatadas</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    position: 'relative', 
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150, 
    backgroundColor: '#e0f7fa',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#0077be',
    marginTop: 40,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077be',
    marginTop: 10,
  },
  birthdateText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  infoContainer: {
    width: '100%',
    marginTop: 5,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 22,
    marginBottom: 25,
    backgroundColor: '#003366', 
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
