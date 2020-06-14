import React, { Component, useState } from "react";


import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground,TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native';
import { Block, Text, theme, Button, Toast, Input } from 'galio-framework';
import { Container, Header, Content, Picker, Textarea, Form } from "native-base";
import { View, TextInput, Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Icon, Product } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { NavigationContainer } from "../App.js"





const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;



export default class QuoteWriter extends React.Component {

   //sets quoteArea = text
   //ASK ABOUT onKeyPress

   constructor(props) {
     super(props);
     this.state = {
       selected: undefined,
       quoteArea: '',
       quoteTitle: '',
     };
   }
   onValueChange(value: string) {
     this.setState({
       selected: value
     });
   }


  render() {
    const tester = () =>
    {  nativeEvent: { key: 'Return' } }

    const createTwoButtonAlert = () =>
      Alert.alert(
        "Quote Submission:",
        this.state.quoteArea,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true }
      )

    let pic = {  uri: 'https://i.pinimg.com/originals/97/e1/48/97e148eeafff33c760990c77b004d640.jpg'  };

    console.log(this.state.quoteTitle, 'Title')
    console.log(this.state.quoteArea, 'Quote')

    let onChangeText = (text) => { this.setState({ quoteArea : text })}
    let onChangeTitle = (text) => { this.setState({ quoteTitle : text })}

    return (

      <Block flex style={styles.profile}>
          <Block flex>
            <ImageBackground
            source={pic}
            style={styles.myImage}>
              <Block flex style={styles.profileDetails}>
                <Text color="orange" size={45} style={{ paddingBottom: 650, marginLeft: 25 }}>Quote Writer</Text>
              </Block>
            </ImageBackground>

        </Block>

        <Block flex style={styles.inputDetails}>
          <Button round uppercase color="red" onPress={createTwoButtonAlert}>  Submit Quote </Button>

            <Block flex>
            <ScrollView keyboardDismissMode='on-drag'>
                <TextInput
                  style={{ height: 100, borderColor: 'lightgreen', borderWidth: 5, marginTop: 20 }}
                  multiline = {false}
                  color="white"
                  numberOfLines={4}
                  placeholder="Enter Title"
                  placeholderTextColor="white"
                  textAlign="center"
                  onChangeText={text => onChangeTitle(text)}
                  value={this.state.quoteTitle}
                />
                <TextInput
                  style={{ height: 200, borderColor: 'lightgreen', borderWidth: 5, marginTop: 10 }}
                  multiline = {true}
                  color="white"
                  numberOfLines={4}
                  onKeyPress={this.nativeEvent}
                  placeholder="Enter Quote"
                  placeholderTextColor="white"
                  textAlign="center"
                  keyboardAppearance = {'dark'}
                  scrollEnabled={true}
                  blurOnSubmit={true}
                  contextMenuHidden={true}

                //  onKeyPress={tester()}
                  onChangeText={text => onChangeText(text)}
                  value={this.state.quoteArea}
                />
              </ScrollView>
            </Block>



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
  curvePic:{
    flex: 1,
    height: 464,
    marginTop: -3,
    borderRadius: 10,
    borderWidth: -10,
    borderColor: '#fff',
  },
  inputDetails:{
    marginTop: -380,
    marginLeft: 20,
    marginRight: 20,
  },
  textBoxStyles:{
    marginTop: 20,
    marginBottom: 140,
    marginLeft: 20,
    marginRight: 20,
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
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
});
