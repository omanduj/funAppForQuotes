import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { Block, Text, theme, Button, Card, DeckSwiper, Accordion } from 'galio-framework';

import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Product } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { NavigationContainer } from "../App.js"

import products from '../constants/products';



const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

const data = [
  { title: "\"Title\"", content: "\"Inserted Quote\"",
    icon: {
      family: 'material',
      size: 16,
    }
 },
  { title: "Uriel Smells", content: "He said he smells like a fish" },
  { title: "Baby Pooped", content: "She went outside and simply pooped" }
];


export default class QuoteViewer2 extends React.Component {

  render() {
    let pic = {
      uri: 'https://i.redd.it/29p3n3v8tjv21.jpg'
    };

    return (
      <Block flex style={styles.profile}>
        <Block flex>
            <ImageBackground
            source={pic}
            style={styles.myImage}>
              <Block flex style={styles.profileDetails}>
                  <Text color="orange" size={45} style={{ paddingBottom: 650, marginLeft: -15 }}>Quote Viewer #2</Text>
              </Block>
            </ImageBackground>
        </Block>
        <Block style={{ height: 600, paddingBottom: 200,  marginLeft: 35 }}>
          <Accordion dataArray={data} />
        </Block>

      </Block>
    );
  }
}







const styles = StyleSheet.create({

  myImage:{
    marginTop: 0,
    width: width,
    height: 700,

  },
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 47,
    paddingLeft: 45,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  Notes: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
