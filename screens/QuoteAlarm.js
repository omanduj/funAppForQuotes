import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,  View } from 'react-native';
import { Block, Text, theme, Button, Input } from 'galio-framework';
import { Container, Header, Content, DatePicker } from 'native-base';

import { LinearGradient } from 'expo-linear-gradient';
import TimePicker from 'react-native-simple-time-picker';

import { Icon, Product } from '../components';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import { NavigationContainer } from "../App.js"

import products from '../constants/products';




const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;



export default class QuoteAlarm extends React.Component {
  state = {
    selectedHours: 0,
    //initial Hours
    selectedMinutes: 0,
    //initial Minutes
  }
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { selectedHours, selectedMinutes } = this.state;
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
                  <Text color="orange" size={45} style={{ paddingBottom: 550, marginLeft: 31 }}>Quote Alarm</Text>
              </Block>
            </ImageBackground>
        </Block>

          <Container style={{marginBottom: 15, marginLeft: 50, marginRight: 50, paddingBottom: 1}}>
              <Content>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
                <Text style = {{marginLeft: 50}}>
                  Chosen Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
            </Content>
          </Container>


        <View style={styles.container}>
          <Text>{selectedHours}hr:{selectedMinutes}min</Text>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hourse value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={(hours, minutes) => this.setState({
                 selectedHours: hours, selectedMinutes: minutes
           })}
          />
        </View>

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
  ButtonDetails:{
    paddingBottom: 325,
    marginLeft: 20,

  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: 47,
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
    backgroundColor: '#fff',
    marginLeft:50,
    marginRight:50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
