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
  Text,
  Fab,
  Grid,
  Row
} from "native-base";
import styles from "./styles";

import Product from "./../../products/Product";

class HeaderSpan extends Component {

  state = {
    active: 'false'
  };
  

  render() {
    return (
      <Container style={styles.container}>
        <Header >
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
       {/*} <Content style={styles.content}>  */}

        <Grid>
          <Row size={4} style={{ backgroundColor: "#635DB7" }} > 
          <Product style={styles.contain}>
					</Product >
          </Row>
          
          
        </Grid>
          <Text>Productos de la tienda</Text>
  
         
          

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
      
         
      {/*   </Content>      */}     
        
      
      </Container>
    );
  }
}

export default HeaderSpan;
