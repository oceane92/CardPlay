import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  TextInput,
  Slider } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
        <View style={styles.main}>

          {/* Nom de la partie */}
          <View style={styles.partie}>
            <Text>Nom de la partie</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>
          </View>
          
          {/* Nb joueurs */}
          <View style={styles.settings}>
            <Text>Nombre de joueurs</Text>
            <Slider step={1} maximumValue={100} />
          </View>
        </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Nouvelle partie',
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E7E7E7',
  },

  partie: {
    flex: 1,
    margin: 20,
  },

  settings: {
    flex: 1,
  },

  TextInput: {
    flex: 1,
    padding: 10
  }
});