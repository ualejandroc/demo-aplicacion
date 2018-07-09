import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
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
   TouchableHighlight, 
  Card, CardItem, Thumbnail,
  Picker
} from "native-base";

import Api from "../../products/WooCommerce/Woocommerce";

import styles from "../form/styles";

import  Captures  from "./captures";

import CustomWebView from 'react-native-webview-android';


GLOBAL.fetch = fetch;

/************ */

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");
/************ */



class PostForm extends Component {

  constructor(props){
    super(props);

    var d = new Date();
    var named = d.getDate().toString()+d.getDay().toString()+d.getMilliseconds().toString();

   this.HTML = `
    <html>
     <head>
       <style>
       input[type="file"] {
            display: none;
        }
        .custom-file-upload {
            border: 1px solid #ccc;
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
        }
        #formImg{ 
          display: flex;
          justify-content: center;
          background-color: #fff;
        
        }
        body{
          background-color: #fff;
        }
        
        </style>
     </head>
     <body>
    <form enctype="multipart/form-data" id="formImg"
    action="http://crearstore.com/fila/conn.php" method="POST"
     target="request">
      <label for="file-5"class="custom-file-upload " id="custom-file">
        <figure>
        <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
        </figure>
        <span class="iborrainputfile">Seleccionar archivo</span>
      </label>
        <input id="imgs" name="uploadedfile" type="file" /> 
        <input id="ImgName" name="ImgName" type="hidden" value="${named}">  
        </form>
        <br/>
           <image id="resImg" src='' />
        <div id="response">${named}</div>
       
        </body>
        </html>
    `;

    this.imgSrc='http://crearstore.com/fila/load/'+named + '.jpg';

    this.token='';

    this.types ='';
 
    
     //this.fetchDatas(this.cBack,this.fillCategory);

     
     
  }

  componentDidMount(){
    
    this.fetchDatas(this.cBack,this.fillCategory);
    
  }

      cBack(responseText){
        this.token=JSON.parse(responseText).token; 
      }


      fillCategory(){
        var self = this;
        var token= self.token; 

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            self.types= JSON.parse(this.responseText) ;
            //console.log(self.types);   
          }
        });   

        xhr.open("GET", "https://crearstore.com/wp-json/wc/v2/products/categories");
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.setRequestHeader("authorization", "Bearer "+ token);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "467a136a-44be-41d2-8265-cae0afa8fe3f");

        xhr.send();  
      }

state = {
  types:'',
  selectedUserType:'',

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

  //Carga drop down de categorias
  loadUserTypes() {
    var self= this;   
 
    setTimeout(function() {
      //self.setState({types:  self.types});
      console.log(self.types)  ; 
        if(self.state.types!=''){
         
        return self.state.types.map(user => (
          <Picker.Item key={user.id} label={user.name} value={user.slug} />
        ))
      }
    }, 3000); 
  
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

   
  fetchDatas(cBack, fillCat){
    var self = this;
    var data = "username=acceso&password=0995480563";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {       
        //self.fillText(JSON.parse(this.responseText).token);
        cBack(this.responseText);
        fillCat();
        
      }
    });
    
    xhr.open("POST", "https://crearstore.com/wp-json/jwt-auth/v1/token");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "f44d488a-4ee4-a32c-1324-fad1c2d837ca");
    
    xhr.send(data);
  }


  fillText(){
    var self = this;
    var token= self.token;
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

         {/*}   <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                   // width: (100%) / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>     */}  

          <Form>
          <Text style={styles.separation}></Text>
            <Item inlineLabel>
              <Label>Titulo de Producto</Label>              
            </Item>
            <Input style={styles.input} onChangeText={(text) => this.setState({name: text})} />

            <Text style={styles.separation}></Text>   
           
            <Picker
              selectedValue={this.state.selectedUserType}
              onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedUserType: itemValue})}>
              {this.loadUserTypes()}
            </Picker> 

           <Text style={styles.separation}></Text>   

          <Item inlineLabel>
              <Label>Imagen de Producto</Label>              
            </Item>
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
                    });

                    function simulateClick() {
                      var event = new MouseEvent('click', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': true
                      });
                      var cb = document.querySelector('#imgs'); 
                      var canceled = !cb.dispatchEvent(event);
                      if (canceled) {
                      } else {                      
                  
                      }
                    }                                      
                    
                    document.querySelector('#custom-file').addEventListener('click', async function(event) {                     
                      simulateClick();                            
                      }); ` 
                  } />    

             <Text style={styles.separation}></Text>
             <Item inlineLabel>
              <Label>Precio</Label>              
            </Item>
            <Input style={styles.input}  
            keyboardType={'numeric'} 
            onChangeText={(text) => this.setState({regular_price: text})} />

            <Text style={styles.separation}></Text>      

            <Text style={styles.separation}></Text>

             <Item inlineLabel>
              <Label   
               >Descripcion corta</Label> 
               </Item> 
              <Text style={styles.separation}></Text>

              <Textarea rowSpan={5}
              onChangeText={(text) => this.setState({short_description: text})} 
              bordered 
              info placeholder="..." 
              style={styles.input}  />
            
              <Text style={styles.separation}></Text>


               <Item inlineLabel>
              <Label   
               >Descripcion Detallada</Label> 
               </Item>   
              <Text style={styles.separation}></Text>

              <Textarea rowSpan={5} 
              style={styles.input} 
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
          onPress={() => { this.fillText( ); } }
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
