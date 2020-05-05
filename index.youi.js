/**
 * Basic You.i RN app
 */
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, WebView, View } from "react-native";

export default class YiReactApp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View
            style={styles.imageContainer}
            focusable={true}
            accessible={true}
            accessibilityLabel="You i TV logo"
            accessibilityHint="Image in your first app"
            accessibilityRole="image"
          >
            <Image
              style={styles.image}
              source={{ uri: "res://drawable/default/youi_logo_red.png" }}
            />
          </View>
        </View>
        <View
          style={styles.bodyContainer}
          focusable={true}
          accessible={true}
          accessibilityLabel="WebView"
          accessibilityHint="WebView in your first app"
        >
          <WebView
            name="SourceTest" 
            source={{uri: 'https://dfwtandc.secure.footprint.net/termsAndConditions/html/bbtv/regular/version_8.0_terms.html'}} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 5
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
