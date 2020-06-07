import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Accordion } from 'galio-framework';

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
  { title: "Baby Pooped", content: "She went outside and simply pooped" }
];



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
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: product.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.toggleSwitch()}>
          <Block flex space="between" style={styles.productDescription}>
            {this.state.showAccordian ? <Accordion dataArray={data} /> : null}
            <Text size={14} style={styles.productTitle}>{product.title}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>${product.price}</Text>
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
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
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
