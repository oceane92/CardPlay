import { connect } from 'react-redux'
import React, { Component } from 'react';
import ComponentUser from '../components/ComponentUser'
import { 
  StyleSheet, 
  View } from 'react-native';

var nbPlayer = 2;

export default class ContainersUsers extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <ComponentUser/>
        <ComponentUser/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
  }
});