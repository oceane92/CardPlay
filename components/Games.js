import React, { Component } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  PanResponder,
  Image, 
  Animated,
  ImageBackground } from "react-native";

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } 
        }
      });
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  render() {
    return (
      <View style={{ width: "30%", alignItems: "center"}}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{position: "absolute"}}>
          <Animated.View {...this.panResponder.panHandlers} style={[panStyle, styles.package, {opacity:this.state.opacity}]}>
            <ImageBackground style={styles.imgCard} source={require('../assets/images/dos_card.jpg')}/>
          </Animated.View>
        </View>
      );
    }
  }
}

export default class Games extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.packagePick}>
          <Draggable style={styles.package}/>
          <View style={styles.pick}>
            <View style={styles.boxPackage1}>
              <Image style={styles.imgCard} source={require('../assets/images/cards/2d.gif')}/>
            </View>
            <View style={styles.boxPackage2}>
              <Image style={styles.imgCard} source={require('../assets/images/cards/10d.gif')}/>
            </View>
            <View style={styles.boxPackage3}>
              <Image style={styles.imgCard} source={require('../assets/images/cards/As.gif')}/>
            </View>
          </View>
        </View>

        <View style={styles.dropZone}>
          <View style={styles.box1}>
            <Image style={styles.imgCard} source={require('../assets/images/cards/2s.gif')}/>
          </View>
          <View style={styles.box2}>
          <Image style={styles.imgCard} source={require('../assets/images/cards/Jd.gif')}/>
          </View>
          <View style={styles.box3}>
          <Image style={styles.imgCard} source={require('../assets/images/cards/4s.gif')}/>
          </View>
        </View>

      </View>
    );
  }
}

var cardMainLeft = 20
var cardMainTop = 30
var cardWidth = 80
var cardHeight = 100

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    margin: 5
  },

  packagePick: {
    flex: 2,
    flexDirection: 'row'
  },
  
  package: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1, 
    marginRight: 5,
    width: cardWidth,
    height: cardHeight + 20,
    resizeMode: 'stretch',
  },

  pick : {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#47AD39'
  },

  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black'
  },

  imgCard: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },



  boxPackage1: {
    position: 'absolute',
    top: cardMainTop,
    left: cardMainLeft,
    width: cardWidth,
    height: cardHeight
  },
  boxPackage2: {
    position: 'absolute',
    top: cardMainTop*2,
    left: cardMainLeft*2,
    width: cardWidth,
    height: cardHeight
  },
  boxPackage3: {
    position: 'absolute',
    top: cardMainTop*3,
    left: cardMainLeft * 3,
    width: cardWidth,
    height: cardHeight
  },


  box1: {
    position: 'absolute',
    top: cardMainTop,
    left: cardMainLeft,
    width: cardWidth,
    height: cardHeight
  },
  box2: {
    position: 'absolute',
    top: cardMainTop,
    left: cardMainLeft*2,
    width: cardWidth,
    height: cardHeight
  },
  box3: {
    position: 'absolute',
    top: cardMainTop,
    left: cardMainLeft * 3,
    width: cardWidth,
    height: cardHeight
  },

  ballContainer: {
    height:200
  },
  
  row: {
    flexDirection: "row"
  },

  dropZone: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    backgroundColor: '#47AD39'
  },

  text: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  }
});