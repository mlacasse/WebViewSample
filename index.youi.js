/**
 * Basic You.i RN app
 */
import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, View } from "react-native";
import { Composition, FormFactor, WebViewRef } from "@youi/react-native-youi";

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
          accessibilityLabel="WebViewRef"
          accessibilityHint="WebViewRef in your first app"
        >
          <Composition source = "WebViewRefProps_MainComp">
              <WebViewRef
                name="SourceTest" 
                source={{uri: 'https://dfwtandc.secure.footprint.net/termsAndConditions/html/bbtv/regular/version_8.0_terms.html'}} 
              />
            </Composition>
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
    height: FormFactor.isTV ? 225 : 75,
    width: FormFactor.isTV ? 225 : 75,
    resizeMode: "contain"
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
