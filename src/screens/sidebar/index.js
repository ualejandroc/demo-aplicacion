import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/favico-crear.png");
const datas = [
 
/*  {
    name: "Actionsheet",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },*/
  {
    name: "Informacion",
    route: "Header",
    icon: "phone-portrait",
    bg: "#477EEA",
    types: "10"
  },
  {
    name: "About",
    route: "Anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Tienda",
    route: "HeaderSpan",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "10"
  },

  {
    name: "Cupones",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8"
  },
  {
    name: "Galeria",
    route: "NHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
/*  {
    name: "Pagex",
    route: "Pagex",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  }, */  
  //todo: aqui poner post del blog
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
