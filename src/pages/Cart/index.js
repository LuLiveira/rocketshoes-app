import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

import {formatBRL} from '../../util/format';
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
import {FlatList} from 'react-native-gesture-handler';

class Cart extends Component {
  removeFromCart(id) {
    const {dispatch} = this.props;

    dispatch(CartActions.removeFromCart(id));
  }

  decrementItem(id) {
    const {dispatch} = this.props;

    dispatch(CartActions.decrementItem(id));
  }

  incrementItem(id) {
    const {dispatch} = this.props;

    dispatch(CartActions.incrementItem(id));
  }

  loadCartItens(item) {
    return (
      <>
        <Product>
          <ProductImage source={{uri: item.image}} />
          <ProductInfo>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductInfo>
          <RemoveButton onPress={() => this.removeFromCart(item.id)}>
            <Icon name="delete-forever" size={36} color="#7159c1" />
          </RemoveButton>
        </Product>
        <ProductActions>
          <DecrementItemButton onPress={() => this.decrementItem(item.id)}>
            <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          </DecrementItemButton>

          <Input editable={false} value={String(item.amount)} />

          <IncrementItemButton onPress={() => this.incrementItem(item.id)}>
            <Icon name="add-circle-outline" size={26} color="#7159c1" />
          </IncrementItemButton>
          <TotalPrice>{item.subtotal}</TotalPrice>
        </ProductActions>
      </>
    );
  }

  render() {
    const {cart, total} = this.props;

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
      <Container>
        <ProductContainer>
          <FlatList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({item}) => this.loadCartItens(item)}
          />
          <Total>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{total}</TotalValue>
          </Total>
          <ContentButton>
            <FinishButton>
              <FinishText>FINALIZAR PEDIDO</FinishText>
            </FinishButton>
          </ContentButton>
        </ProductContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatBRL(product.price * product.amount),
  })),
  total: state.cart.reduce((total, product) => {
    return formatBRL(total + product.price * product.amount);
  }, 0),
});

export default connect(mapStateToProps)(Cart);