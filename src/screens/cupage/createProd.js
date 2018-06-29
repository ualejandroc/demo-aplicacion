
import React, { Component } from "react";
import {
  Text, View, StyleSheet, Dimensions, TouchableHighlight, Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
//import fetch from 'react-native-fetch-polyfill'

GLOBAL.fetch = fetch;


 // WP REST API 
const REQUEST_URL  = 'https://leadershipquotes.mystagingwebsite.com/wp-json/wp/v2/media';

// Windowsize is referenced in the styles below.
const windowSize = Dimensions.get('window');

export default class CreateProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isLoading: true,

      dataModel :{
        name: 'Premium Quality',
    type: 'simple',
    regular_price: '21.99',
    description: 'Pellentesque habitant  tristiqueo.',
    short_description: 'Pellentesque habitant senectus et netus et malesuada fames ac turpis egestas.',
    categories: [
      {
        id: 9
      },
      {
        id: 14
      }
    ],
    images: [
      {
        src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
        position: 0
      },
      {
        src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
        position: 1
      }
    ]
      }  
    }
    //this.fetchData = this.fetchData.bind(this);
    this.fetchDatas = this.fetchDatas.bind(this);
    this.fillText = this.fillText.bind(this);
  }

  getInitialState() {
    return {
      // Card is initially set to null so that the loading message shows.
      card: null,
    };
  }

  componentDidMount() {
   // this.fetchData();
    this.fetchDatas();
  }

  fetchDatas(){
    var self = this;
    var data = "username=acceso&password=0995480563";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        self.fillText(JSON.parse(this.responseText).token);
        
      }
    });
    
    xhr.open("POST", "https://crearstore.com/wp-json/jwt-auth/v1/token");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "f44d488a-4ee4-a32c-1324-fad1c2d837ca");
    
    xhr.send(data);
  }


  fillText(token){
    var self = this;
    var data = "name=remium%20Quality&type=simple&regular_price=29&description=description&short_description=short_description";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        self.setState({
          card: { pic: JSON.stringify(this.responseText) }
          //card: { pic: responseJson[0].guid.rendered }
        });
      }
    });
    
    xhr.open("POST", "http://crearstore.com/wp-json/wc/v2/products");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("authorization", "Bearer "+ token);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "4c654d71-858b-54a9-280a-819ffb6155e5");
    
    xhr.send(data);
  }

  
  // Instead of immediately rendering the template, we now check if there is data in the 'card' variable
  // and render a loading view if it's empty, or the 'card' template if there is data.
  render() {
    if ( !this.state.card ) {
      return this.renderLoadingView();
    }
    return this.renderCards();
  }

  // The loading view template just shows the message "Wait for it..."
  renderLoadingView() {
    return (
      < View style={styles.container}>
        < Text style={styles.text}>
          Wait for it...
        </Text>
      </View>
    );
  }

  // This is the original render function, now renamed to renderCard, which will render our main template. 
  renderCard() {
    let quote = this.state.card.pic;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          < Image style={{width: windowSize.width, height: windowSize.height}} source={{uri: this.state.card.pic}}  />
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
            onPress={this.fetchData}
          >
            < Text style={styles.buttonText}>Next quote</Text>
          </TouchableHighlight>
        </View>
      </View>
      </View>
    );
  }


  renderCards() {
    let quote = this.state.card.pic;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        < Text>{this.state.card.pic}</Text>
        < Text style={styles.buttonText}>Next quote</Text>
         
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
            onPress={this.fetchData}
          >
             < Text style={styles.buttonText}>Next quote</Text>
          </TouchableHighlight>
        </View>
      </View>
      </View>
    );
  }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    width: windowSize.width,
    height: windowSize.height,
  },
  buttonContainer: {
    bottom: 0,
    flex: .1,
    width: windowSize.width,
    backgroundColor: '#1488BC',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});