import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Product } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import QuoteViewer from '../screens/QuoteViewer';


import products from '../constants/products';


const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class NewScreen extends React.Component {

  render() {
    let pic = {
      uri: 'data:image/jpeg;base64,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'
    };

    return (
      <Block flex style={styles.profile}>
        <Block flex>
            <ImageBackground
            source={pic}
            style={styles.myImage}>
              <Block flex style={styles.profileDetails}>
                  <Text color="orange" size={45} style={{ paddingBottom: 650, marginLeft: 15 }}>Nancy Mandujano</Text>
              </Block>
              </ImageBackground>
        </Block>


        {//<Product product={products[0]} horizontal />
        }


        <ScrollView
          showsVerticalScrollIndicator={false}>
          <Block flex>
              <Block>


                <TouchableOpacity style={{ height: 120 }} onPress={() => {navigation.navigate("QuoteViewer")}}>
                  <Block>
                    <Text color="green" size={35} style={{ paddingBottom: 100, marginLeft: 15 }}>Qoute Generator</Text>
                  </Block>
                </TouchableOpacity>
              </Block>





              <Block>
                <TouchableOpacity style={{ height: 120 }}>
                  <Block>
                    <Text color="green" size={35} style={{ paddingBottom: 100, marginLeft: 15 }}>Qoute alarm</Text>
                  </Block>
                </TouchableOpacity>
              </Block>


              <Block>
                <TouchableOpacity style={{ height: 100 }}>
                  <Block>
                    <Text color="green" size={35} style={{ paddingBottom: 1000, marginLeft: 15 }}>Qoute Viewer</Text>
                  </Block>
                </TouchableOpacity>
              </Block>


          </Block>
        </ScrollView>
      </Block>
    );
  }
}







const styles = StyleSheet.create({

  myImage:{
    marginTop: 0,
    width: width,
    height: 750,

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
    paddingTop: theme.SIZES.BASE * 4,
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
