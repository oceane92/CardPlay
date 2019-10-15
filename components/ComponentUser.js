import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Image,
    Text, 
    AsyncStorage } from 'react-native';

export default class ComponentUser extends Component {
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('User');
          if (value !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
    };

    render() { 
        return (
            <View style={styles.container}>
                {/* Img du joueur (Image) */}
                <Image style={styles.image} source={require('../assets/images/happy.png')}/>

                <View style={styles.infos}>
                    {/* Username (Text) */}
                    <Text>Username</Text>
                     {/* Nb card (Text) */}
                    <Text>Nb Card</Text>
                </View>
            </View>
        );
    }  
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    infos:{
        flex: 1,
        margin: 10,
    },
    image: {
        width: 50, 
        height: 50,
    }
});