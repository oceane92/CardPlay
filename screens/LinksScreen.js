import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ContainersUsers from '../containers/ContainersUsers';
import Games from '../components/Games';
import { genericTypeAnnotation } from "@babel/types";

export default class LinksScreen extends Component {
  render() {
    return (
        <View style={styles.main}>
          
          <View style={styles.users}>
            <ContainersUsers/>
          </View>
          <View style={styles.game}>
            <Games/>
          </View>
        </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Partie',
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E7E7E7',
  }, 
  users: {
    flex: 2,
  },
  game: {
    flex: 8,
  }
});