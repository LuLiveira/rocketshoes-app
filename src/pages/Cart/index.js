import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductContainer,
  ProductInfo,
  ProductPrice,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';

class Cart extends Component {
  loadCartItens(item) {
    return (
      <Product>
        <ProductImage source={{uri: item.image}} />
        <ProductInfo>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.price}</ProductPrice>
        </ProductInfo>
      </Product>
    );
  }

  render() {
    const {cart} = this.props;

    return (
      <Container>
        <ProductContainer>
          <FlatList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({item}) => this.loadCartItens(item)}
          />
        </ProductContainer>
      </Container>
    );
  }
}

export default connect(state => ({
  cart: state.cart,
}))(Cart);
