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

import CustomWebView from 'react-native-webview-android';

GLOBAL.fetch = fetch;

/************ */

/************ */
/*
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#eee"
  }
});
*/


class PostForm extends Component {

  constructor(props){
    super(props);

    var d = new Date();
    var named = d.getDate().toString()+d.getDay().toString()+d.getMilliseconds().toString();

   this.HTML = `
    <html>
     <head>
       
     </head>
     <body>
    <form enctype="multipart/form-data" id="formImg"
    action="http://crearstore.com/fila/conn.php" method="POST"
     target="request">
        <input id="imgs" name="uploadedfile" type="file" /> 
        <input id="ImgName" name="ImgName" type="hidden" value="${named}">  
        </form>
           <image id="resImg" src='http://www.idiomaspc.com/grafik/franzoesisch150.jpg' />
           <div id="response">${named}</div>
       
        </body>
        </html>
    `;

    this.imgSrc='http://crearstore.com/fila/load/'+named + '.jpg';

  }

state = {
  card: {pic:''},
  resp:'',
  name: 'Premium Quality',
  type: 'simple',
  regular_price: '45.99',
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
  images: [{
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
   dataModel={
    name: 'Premium Quality',
    type: 'simple',
    regular_price: '45.99',
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
    images: [{
        src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg',
        position: 0
      },
      {
        src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg',
        position: 1
      }
    ]
  }

  buildModel(){
   /* 
   this.setState({
     dataModel: 
      `name=${encodeURI(this.state.name)}&`+
       `type=${encodeURI(this.state.type)}&`+
       `regular_price=${ this.state.regular_price}&`+
       `short_description=${ this.state.short_description}&`+
      `description=${encodeURI(this.state.description)}&`+
      `images=${JSON.stringify(this.state.images)}`
 
     }) ;   */
  }

  buildFormModel(){
    var data = new FormData();
    this.dataModel['images'][0].src = this.imgSrc;
    this.dataModel.name=this.state.name;
    this.dataModel.short_description=this.state.short_description;

    var model= this.dataModel;

    var names=Object.keys(model);
    var infos=Object.values(model);

    var arrayCat='categories';
    var arrayIms='images';
    for(var x =0; x< names.length; x++){
      if(names[x]==arrayCat){

        var terms=Object.keys(model[arrayCat]);
        for(var p =0; p< terms.length; p++){
          var kys=Object.keys(model[arrayCat][p]);
          var its=Object.values(model[arrayCat][p]);
          for(var y =0; y< kys.length; y++){
            data.append(arrayCat+"["+p+"]["+kys[y]+"]", its[y]);
          }
        }

      }else if (names[x]==arrayIms){

        var terms=Object.keys(model[arrayIms]);
        for(var p =0; p< terms.length; p++){
          var kys=Object.keys(model[arrayIms][p]);
          var its=Object.values(model[arrayIms][p]);
          for(var y =0; y< kys.length; y++){
            data.append(arrayIms+"["+p+"]["+kys[y]+"]", its[y]);
          }
        }


      }else{
        data.append(names[x], infos[x]);
      }
    }

    return data;

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
    
    var data=self.buildFormModel();

    console.log(JSON.stringify(data));
    card: { pic: JSON.stringify(data) }

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        self.setState({
          card: { pic: JSON.stringify(this.responseText) }
        
        });
      }
    });   

    xhr.open("POST", "https://crearstore.com/wp-json/wc/v2/products/");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.setRequestHeader("authorization", "Bearer "+ token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "467a136a-44be-41d2-8265-cae0afa8fe3f");

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
          
          <CustomWebView 
                style={styles.containers}
                source={{html: this.HTML}}
                injectedJavaScript={
                `   
                  function sendData(){
                    var inputForm = document.querySelector('#formImg');

                    var xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;
                    var txtImg="";

                    xhr.addEventListener("readystatechange", function () {
                      if (this.readyState === 4) {
                        txtImg = this.responseText;
                      }
                    });

                    xhr.open("POST", "http://crearstore.com/fila/conn.php",false);
                
                    xhr.send(new FormData(inputForm)); 

                    return txtImg;
                  
                  };
                  
                
                  document.querySelector('#imgs').addEventListener('change', async function(event) {
                    var resImg = sendData();
                
                    alert(JSON.parse(resImg).image_url);
                  
                });` } />    

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
