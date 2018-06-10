import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem
} from "native-base";
import styles from "../button/styles";
import Anatomy from "../anatomy/";


import { createStackNavigator } from 'react-navigation'; // Version can be



const datas = [ 
  {
    text: "About",
    route: "Anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
];

/*
import Heads from "../Header/";

const datas = DrawerNavigator(
  {
    
    Heads: { screen: Heads },
  });
*/




class Transparent extends Component {
  render() {
    return (
     
       

        <Content padder style={{ backgroundColor: "transparent", padding: 20 }}>
          


         <View style={{ flexDirection: "row" }}>
            <Button iconLeft style={styles.mb15}>
              <Icon active name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              iconLeft
              bordered
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active name="briefcase" />
              <Text>Work</Text>
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft success style={styles.mb15}>
              <Icon active name="people" />
              <Text>People</Text>
            </Button>
            <Button
              iconLeft
              success
              bordered
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active name="paw" />
              <Text>Animals</Text>
            </Button>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button iconLeft danger style={styles.mb15}>
              <Icon active name="close" />
              <Text>Trash</Text>
            </Button>
            <Button
              danger
              bordered
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active name="trash" />
            </Button>
            <Button
              danger
              transparent
              style={{ marginBottom: 20, marginLeft: 10 }}
            >
              <Icon active name="trash" />
            </Button>
          </View>
          

    
     
   </Content>



    );
  }
}

export default Transparent;
