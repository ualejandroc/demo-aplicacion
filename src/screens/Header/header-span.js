import React, { Component } from "react";
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
  Text
} from "native-base";
import styles from "./styles";

import Product from "./../../products/Product";

class HeaderSpan extends Component {


  

  render() {
    return (
      <Container style={styles.container}>
        <Header span>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Productos </Title>             
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Productos de la tienda</Text>
  
					<Product />
         </Content>

            
           
					<Product />
      
        
      
      </Container>
    );
  }
}

export default HeaderSpan;
