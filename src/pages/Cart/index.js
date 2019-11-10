import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import { formatBRL } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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
  FinishButton,
  FinishText,
  ContentButton,
  EmptyCart,
  EmptyText,
  DecrementItemButton,
  IncrementItemButton,
} from './styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

class Cart extends Component {
  removeFromCart(id) {
    const { dispatch } = this.props;

    dispatch(CartActions.removeFromCart(id));
  }

  increment(item) {
    const { dispatch } = this.props;

    dispatch(CartActions.updateAmountRequest(item.id, item.amount + 1));
  }

  decrement(item) {
    const { dispatch } = this.props;

    dispatch(CartActions.updateAmountRequest(item.id, item.amount - 1));
  }

  loadCartItens(item) {
    return (
      <>
        <Product>
          <ProductImage source={{ uri: item.image }} />
          <ProductInfo>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductInfo>
          <RemoveButton onPress={() => this.removeFromCart(item.id)}>
            <Icon name="delete-forever" size={36} color="#7159c1" />
          </RemoveButton>
        </Product>
        <ProductActions>
          <DecrementItemButton onPress={() => this.decrement(item)}>
            <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          </DecrementItemButton>

          <Input editable={false} value={String(item.amount)} />

          <IncrementItemButton onPress={() => this.increment(item)}>
            <Icon name="add-circle-outline" size={26} color="#7159c1" />
          </IncrementItemButton>
          <TotalPrice>{item.subtotal}</TotalPrice>
        </ProductActions>
      </>
    );
  }

  render() {
    const { cart, total } = this.props;

    if (cart.length === 0) {
      return (
        <Container>
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={100} color="#999" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyCart>
        </Container>
      );
    }

    return (
      <ScrollView>
        <Container>
          <ProductContainer>
            <FlatList
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => this.loadCartItens(item)}
            />
            <Total>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>{formatBRL(total)}</TotalValue>
            </Total>
            <ContentButton>
              <FinishButton>
                <FinishText>FINALIZAR PEDIDO</FinishText>
              </FinishButton>
            </ContentButton>
          </ProductContainer>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatBRL(product.price * product.amount),
  })),
  total: state.cart.reduce((sum, product) => {
    return sum + product.price * product.amount;
  }, 0),
});

export default connect(mapStateToProps)(Cart);
