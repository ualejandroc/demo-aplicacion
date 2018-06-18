import React, { Component } from "react";
import { Image } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right,
    List,
    ListItem,
    Fab
} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import styles from "../card/styles";


import AddButton from "./transparent";


const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");


import { createStackNavigator } from 'react-navigation'; // 



const datas = [ 
  {
    text: "About",
    route: "Anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
];



class NestedGrid extends Component {
 
    
    state = {
      active: 'false'
    };
  

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Nested Grid</Title>
          </Body>
          <Right />
        </Header>

         <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem
             button onPress={() => alert("This is Card Body")}
             cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>




          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>



        
                

        </Content>

  
        
{/*
        <Grid>
          <Col style={{ backgroundColor: "#DD9E2C" }} />
          <Col>
            <Row style={{ backgroundColor: "#00CE9F" }} />
            <Row style={{ backgroundColor: "#635DB7" }} />
          </Col>
        </Grid>

        */}

    {/*    <List
       dataArray={datas}
       renderRow={data =>
         <ListItem
           button
           onPress={() => this.props.navigation.navigate("PostForm")}
         >
           <Left>
             <Text>
               {data.text}
             </Text>
           </Left>
           <Right>
             <Icon name="arrow-forward" style={{ color: "#999" }} />
           </Right>
         </ListItem>}
     />
 */}

      <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => 
              { this.setState({ active: !this.state.active })
                this.props.navigation.navigate("PostForm")
              }
              
              }>
              
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}
            onPress={() => 
              { 
                this.props.navigation.navigate("CreateProd")
              } }
              
            
            >
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
              
          </Fab>

      </Container>
    );
  }
}

export default NestedGrid;
