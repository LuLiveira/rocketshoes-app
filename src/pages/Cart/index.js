import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Cart () {

  const dispatch = useDispatch();
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatBRL(product.price * product.amount),
    }))
  )
  const total = useSelector(state =>
    state.cart.reduce((sum, product) => {
      return sum + product.price * product.amount;
    }, 0)
  )

  function increment(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount + 1));
  }

  function decrement(item) {
    dispatch(CartActions.updateAmountRequest(item.id, item.amount - 1));
  }

  function loadCartItens(item) {
    return (
      <>
        <Product>
          <ProductImage source={{ uri: item.image }} />
          <ProductInfo>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
          </ProductInfo>
          <RemoveButton onPress={() => dispatch(CartActions.removeFromCart(item.id))}>
            <Icon name="delete-forever" size={36} color="#7159c1" />
          </RemoveButton>
        </Product>
        <ProductActions>
          <DecrementItemButton onPress={() => decrement(item)}>
            <Icon name="remove-circle-outline" size={26} color="#7159c1" />
          </DecrementItemButton>

          <Input editable={false} value={String(item.amount)} />

          <IncrementItemButton onPress={() => increment(item)}>
            <Icon name="add-circle-outline" size={26} color="#7159c1" />
          </IncrementItemButton>
          <TotalPrice>{item.subtotal}</TotalPrice>
        </ProductActions>
      </>
    );
  }

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
    <ScrollView style={{ backgroundColor: '#191920' }}>
      <Container>
        <ProductContainer>
          <FlatList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => loadCartItens(item)}
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
