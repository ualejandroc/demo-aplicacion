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
    textTitle: '',   
    dataModel = {
      name: 'Premium',
      type: 'simple',
      regular_price: '21.99',
      description: 'Pellentesque habitant morbi tristique eleifend leo.',
      short_description: 'Pellentesque habitant',
      categories: [
        {
          id: '',
         // name: "Clothing",
        },
        {
          id: ''
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

   
 
 
  savePost(data){
    Api.post('products', data, function(err, data, res) {
    console.log(res);
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
            <Input  onChangeText={(text) => this.setState({textTitle: text})} />

            <Text style={styles.separation}></Text>
            
            <Text style={styles.separation}>{this.state.textTitle} </Text>

          <Text style={styles.separation}></Text>
          
            <Captures />
          
{/*}
<Camera
   ref={(cam) => {
       this.camera = cam;
    }}
    style={styles.preview}
    aspect={Camera.constants.Aspect.fill}>
       <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          [CAPTURE]
       </Text>
</Camera>
  */}

            <Text style={styles.separation}></Text>
              <Label               
              floatingLabel >Descripcion corta</Label>              
              <Textarea rowSpan={5} bordered info placeholder="..." />
            
              <Text style={styles.separation}></Text>

              <Label               
              floatingLabel >Descripcion Detallada</Label>              
              <Textarea rowSpan={5} bordered info placeholder="..." />
            
           
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
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Guardar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default PostForm;
