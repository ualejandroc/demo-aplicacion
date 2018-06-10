import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/fondo.jpg");
const launchscreenLogo = require("../../../assets/logo-crear.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 50,
              marginBottom: 50,
              backgroundColor: "rgba(0, 0, 0, 0.53)"
            }}
          >
            <H3 style={styles.text}>App  Crear Store</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Pruebas</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Vamos alla!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
