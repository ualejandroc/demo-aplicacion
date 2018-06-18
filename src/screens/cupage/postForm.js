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
  Textarea
} from "native-base";

import Api from "../../products/WooCommerce/Woocommerce";

import styles from "../form/styles";

import  Captures  from "./captures";

class PostForm extends Component {

 /* takePicture() {
    this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
  }*/
  state = {
       resp:'',
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
  };

   
  fetchData() {

    
  }
 
  savePost(datas){
    var self =this;
    Api.post('products', datas, function(err, data, res) {
    console.log(res);
    
    self.setState({resp:err });
    
    }).then(function (datax) {
      console.log(datax);

     
    });
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
            <Input  onChangeText={(text) => this.setState({dataModel:{name: text}})} />

            <Text style={styles.separation}></Text>       
          <Text style={styles.separation}></Text>
          
            <Captures />     

             <Text style={styles.separation}></Text>
             <Item inlineLabel>
              <Label>Precio</Label>              
            </Item>
            <Input  onChangeText={(text) => this.setState({dataModel:{regular_price: text}})} />

            <Text style={styles.separation}></Text>           


            <Text style={styles.separation}></Text>
              <Label               
              floatingLabel >Descripcion corta</Label>              
              <Textarea rowSpan={5}
              onChangeText={(text) => this.setState({dataModel:{short_description: text}})} 
              bordered 
              info placeholder="..." />
            
              <Text style={styles.separation}></Text>
            


              <Label               
              floatingLabel >Descripcion Detallada</Label>              
              <Textarea rowSpan={5} 
             onChangeText={(text) => this.setState({dataModel:{description: text}})} 
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
          onPress={() => {this.savePost(this.state.dataModel ); } }
          style={{ margin: 15, marginTop: 50 }}
          >
            <Text>Guardar</Text>
          </Button>
          <Text style={styles.separation}>{JSON.stringify(this.state.dataModel)}</Text> 
          <Text style={styles.separation}></Text> 
        </Content>
      </Container>
    );
  }
}

export default PostForm;
