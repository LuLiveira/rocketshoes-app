import React from 'react';
import { useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartButton, Quantity} from './styles';

export default function Header({navigation}) {

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo />
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={26} color="#FFF" />
        <Quantity>{cartSize}</Quantity>
      </CartButton>
    </Container>
  );
}
