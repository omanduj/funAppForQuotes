import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Block, Text, theme, Accordion, Button } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

const data = [
  { title: "\"Title\"", content: "\"Inserted Quote\"",
    icon: {
      family: 'material',
      size: 16,
    }
 },
  { title: "Uriel Smells", content: "He said he smells like a fish" },
  { title: "Baby Pooped", content: "She went outside and simply pooped" },
  { title: "Frogs", content: "He said he smells like a fish" },
  { title: "Tuna", content: "tisk tisk tisk" },
  { title: "Cheese", content: "Hiss Hiss Hiss" },
  { title: "Croc", content: "Moo Moo Moo" },
  { title: "Cow", content: "Moom Moom Moom" },
  { title: "Chicken", content: "crow crow crow" },

];

let pic2 = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJR3dehEET647UTpOlohOMtOnLvxKroTwJV5Y9CHMm7oP1rR_j&usqp=CAU'
};


class Product extends React.Component {
  state = { showAccordian: true };
  toggleSwitch = () => {
    this.setState({ showAccordian: !this.state.showAccordian })
  }




  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (

        <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('UrielMandujano', { product: product })}>
            <ImageBackground source={pic2} style={styles.curvePic}>


              <Block flex style={[styles.imageContainer, styles.shadow]}>
                <Image source={{ uri: product.image }} style={imageStyles} />
              </Block>
            </ImageBackground>
          </TouchableWithoutFeedback>



          <TouchableWithoutFeedback onPress={() => this.toggleSwitch()}>
              <Block flex style={styles.productDescription}>
                <Text color="darkblue" size={20} style={styles.paddingName}>Nancy Mandujano's Quotes</Text>
                <Block style={{ height: 310 }}>
                    {this.state.showAccordian ? <Accordion dataArray={data} /> : null}
                </Block>
              </Block>
          </TouchableWithoutFeedback>

      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  curvePic:{
    height: 460,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff',
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  paddingQuote: {
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 125,
  },
  myImage:{
    marginTop: 0,
    height: 240,
  },
  paddingName: {
    marginTop: -360,
    marginLeft: 30,
    marginBottom: 5,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
