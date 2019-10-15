import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import ListeGames from '../components/ListeGames'
import SearchBar from '../components/SearchBar'
import { CustomPicker } from 'react-native-custom-picker'

export default class HomeScreen extends React.Component {
  render(){
  const {navigate} = this.props.navigation;
  const options = [
    {      
      label: 'Minfilia',
      uri: require('../assets/images/minfilia.jpeg'),
      value: 1,
    },
    {
      label: 'Alisaie',
      uri: require('../assets/images/alisaie.jpeg'),
      value: 2,
    },
    {
      label: 'Nashu',
      uri: require('../assets/images/nashu.jpeg'),
      value: 3,
    },
    {
      label: 'Papalymo',
      uri: require('../assets/images/papalymo.jpeg'),
      value: 4,
    },
    {
      label: 'Urianger',
      uri: require('../assets/images/urianger.jpeg'),
      value: 5,
    },
  ];
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <ImageBackground source={require('../assets/images/backfont.jpg')} style={{width: '100%', height: '100%', opacity:0.8}}>
      <View style={styles.container}>

        <View style={styles.containerTitre}>
          <Text style={{fontSize:'tahoma', fontSize:25, fontWeight:"300", alignSelf:"center"}}>Jeu de cartes</Text>
        </View>

        <View style={styles.containerUser}>
          <View style={styles.elementUser}>
            <TextInput style={styles.user} placeholder='Votre pseudo' />
                        
            <CustomPicker placeholder={'Choose an avatar '}
            options={options}
            getLabel={item => <Image style={{ height:43, width:60, alignSelf:'flex-start'}} source={item.uri}/>}
            fieldTemplate={renderField}
            optionTemplate={renderOption}
            headerTemplate={renderHeader}
            onValueChange={value => { Alert.alert('Selected item', value ? JSON.stringify(value) : 'No item were selected! ')
            }}
            />

          </View>
          
        </View>

        <View style={styles.containerSearchGame}>
            <ListeGames />
        </View>
        
        <View style={styles.containerSearchBox}>
            <SearchBar />
        </View>
        

        <View style={styles.container2}>
        {/* partie boutons */}
          <View style={styles.containerButton}>
            <Button style={styles.button} title='Rejoindre' onPress={() => navigate('Game')}/>
          </View>        
          <View style={styles.containerButton}>
            <Button style={styles.button} title='Créer une partie' onPress={() => navigate('NewGame')}/>
          </View>
        </View>
        
        <View style={styles.containerDev}>
            <Text style={styles.copyR}>Developped by Océane & Laura @ CFA Insta 2019</Text>

        </View>

      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
  );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

renderHeader = () => {
  return (
    <View style={styles.HeaderFooterContainer}>
      <Text>Choose an avatar</Text>
    </View>
  )
};

renderField = (settings) => {
  const{selectedItem, defaultText, getLabel, clear} = settings
  return (
    <View style={styles.containerField}>
      <View>
      {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity>
              
              <Text style={[styles.text, { color: selectedItem.color }]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
      </View>

    </View>
  )
};

renderOption = (settings) => {
  const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, { backgroundColor: item.color }]} /> 
            <Image style={{ height:40, width:40, alignSelf:'flex-start'}} source={item.uri}/>
            {/*<Text style={{ color: item.color, alignSelf: 'flex-start' }}>{item.label}</Text>*/}
        </View>
      </View>
    )  
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  
  containerTitre:{
    flex:1,
    height:20,
    justifyContent:'center',
    flexDirection:'row',
    alignContent:"center",
  },

  titre:{
    margin:5,
    fontSize:25,
    color:'black',
    textAlign:'center',
  },

  containerUser:{
    flex:1,
    backgroundColor:'white',
    margin:10,
    borderRadius:12,
  },

  elementUser:{
    flexDirection:"row",
    alignSelf:'center',
  },

  listAvatars:{
    flex:1,
    width:20,
    height:20,
    alignSelf:'center',
  },

  user:{
    flex:1,
    width:25,
    alignSelf:'center',
    fontSize:15,
    marginLeft:3,
  },

  containerSearchGame:{
    flex:3,
    margin:10,
    borderRadius:12,
    backgroundColor:'white',
  },

  containerSearchBox:{
    flex :1,
    margin:10,
  },

  container2:{
    flex:2,
    flexDirection:'row',
  },

  containerButton:{
    flex:1,
    width:40, 
    height:40,
    backgroundColor:'#FFE5CC',
    alignContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    margin:3,
    borderRadius:5,
  },

  button:{
    flex:1,
    marginRight:25,
    borderWidth:5,
    borderRadius:5,
    alignContent:'center',
    backgroundColor:'transparent',
  },

  containerDev:{
    flex:1,
    alignItems:'center',
  },

  copyR:{
    alignContent:'center',
    height:10,
    color:'white',
    fontSize:9,
  },


  containerField: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 5,
  }
});
