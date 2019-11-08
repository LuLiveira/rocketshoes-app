import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartButton, Quantity} from './styles';

export default function Header({navigation}) {
  return (
    <Container>
      <Logo />
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={26} color="#FFF" />
        <Quantity>1</Quantity>
      </CartButton>
    </Container>
  );
}
