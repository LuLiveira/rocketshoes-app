import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductContainer,
  ProductInfo,
  ProductPrice,
  RemoveButton,
  ProductActions,
  Input,
  TotalPrice,
  Total,
  TotalLabel,
  TotalValue,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';

class Cart extends Component {
  loadCartItens(item) {
    return (
      <>
        <Product>
          <ProductImage source={{uri: item.image}} />
          <ProductInfo>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductInfo>
          <RemoveButton>
            <Icon name="delete-forever" size={36} color="#7159c1" />
          </RemoveButton>
        </Product>
        <ProductActions>
          <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          <Input readonly={true} />
          <Icon name="add-circle-outline" size={26} color="#7159c1" />
          <TotalPrice>11111</TotalPrice>
        </ProductActions>
      </>
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
          <Total>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>1616161</TotalValue>
          </Total>
        </ProductContainer>
      </Container>
    );
  }
}

export default connect(state => ({
  cart: state.cart,
}))(Cart);
