import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

import nearbyCinemas from '../constants/nearbyCinemas';

export default class RoundedImageText extends Component {
  itemsList() {
    return nearbyCinemas.map((item, index) => (
      <View key={index} style={styles.mainPadding}>
        <ImageBackground
          style={styles.backgroundImageSize}
          imageStyle={styles.imageBorderRadius}
          source={{
            uri: item.image,
          }}>
          <View style={styles.backgroundOpacity}>
            <Text style={styles.textCenter}>{item.name}</Text>
          </View>
        </ImageBackground>
      </View>
    ));
  }

  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.itemsList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainPadding: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  backgroundOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  backgroundImageSize: {
    width: 120,
    height: 100,
  },
  imageBorderRadius: {
    borderRadius: 30,
  },
  textCenter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },
});
