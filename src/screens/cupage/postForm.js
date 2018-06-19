import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Textarea,
  Dimensions, TouchableHighlight, Image
} from "native-base";

import Api from "../../products/WooCommerce/Woocommerce";

import styles from "../form/styles";

import  Captures  from "./captures";

GLOBAL.fetch = fetch;

/************ */

/************ */

class PostForm extends Component {


  state = {
    card: {pic:''},
       resp:'',
 
      name: 'Premium Quality',
  type: 'simple',
  regular_price: '45.99',
  description: 'Pellentesque habitant  tristiqueo.',
  short_description: 'Pellentesque habitant senectus et netus et malesuada fames ac turpis egestas.',
 /* categories: [
    {
      id: 9
    },
    {
      id: 14
    }
  ],*/
  images: [
    {
      src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
      position: 0
    },
    {
      src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
      position: 1
    }
  ],
  dataModel:''
    
  };

  buildModel(){
   this.setState({
     dataModel:  //JSON.stringify(
      `name=${encodeURI(this.state.name)}&`+
       `type=${encodeURI(this.state.type)}&`+
       `regular_price=${ this.state.regular_price}&`+
       `short_description=${ this.state.short_description}&`+
      `description=${encodeURI(this.state.description)}&`+
      `images=${JSON.stringify(this.state.images)}`
    //  )
     }) ;
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
    //var data = "name=remium%20Quality&type=simple&regular_price=29&description=description&short_description=short_description";
    self.buildModel();
    var data=self.state.dataModel;

    console.log(self.state.dataModel);

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

 
 


  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Informacion del Producto</Title>
          </Body>
          <Right />
        </Header>

        <Content  style={styles.formBack}>
          <Form>
            <Item inlineLabel>
              <Label>Titulo de Producto</Label>              
            </Item>
            <Input  onChangeText={(text) => this.setState({name: text})} />

            <Text style={styles.separation}></Text>       
          <Text style={styles.separation}></Text>
          
            <Captures />     

             <Text style={styles.separation}></Text>
             <Item inlineLabel>
              <Label>Precio</Label>              
            </Item>
            <Input  onChangeText={(text) => this.setState({regular_price: text})} />

            <Text style={styles.separation}></Text>           


            <Text style={styles.separation}></Text>
              <Label               
              floatingLabel >Descripcion corta</Label>              
              <Textarea rowSpan={5}
              onChangeText={(text) => this.setState({short_description: text})} 
              bordered 
              info placeholder="..." />
            
              <Text style={styles.separation}></Text>
            


              <Label               
              floatingLabel >Descripcion Detallada</Label>              
              <Textarea rowSpan={5} 
             onChangeText={(text) => this.setState({description: text})} 
            bordered info placeholder="..." />

              <Text style={styles.separation}></Text>
            
            
           
            {/* <Item>
              <Icon active name="home" />
              <Input placeholder="Icon Textbox" />
            </Item>
            <Item>
              <Input placeholder="Icon Alignment in Textbox" />
              <Icon active name="swap" />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            */}
          </Form>
          <Button block 

          underlayColor='#ccc'
          onPress={() => { this.fetchDatas( ); } }
          style={{ margin: 15, marginTop: 50 }}
          >
            <Text>Guardar</Text>
          </Button>
          <Text style={styles.separation}>
          {this.state.dataModel}</Text> 
          <Text style={styles.separation}></Text> 
          < Text>{this.state.card.pic}</Text>
        </Content>
      </Container>
    );
  }
}

export default PostForm;
