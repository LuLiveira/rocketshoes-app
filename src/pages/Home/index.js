import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';
import { formatBRL } from '../../util/format';

import api from '../../services/api';
import {
  Product,
  ProductImage,
  Container,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  BackgroundIcon,
} from './styles';

export default function Home() {

  const [products, setProduct] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  )
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      setProduct(response.data);
    }
    getProducts();
  }, []);


  function addProductToCart(id){
    dispatch(CartActions.addToCartRequest(id));
  };

  function renderProducts(item) {
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatBRL(item.price)}</ProductPrice>
        <AddButton onPress={() => addProductToCart(item.id)}>
          <BackgroundIcon>
            <Icon name="add-shopping-cart" size={26} color="#FFF" />
            <Text style={{ color: '#FFF' }}>{amount[item.id] || 0}</Text>
          </BackgroundIcon>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal={true}
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => renderProducts(item)}
      />
    </Container>
  );
}
