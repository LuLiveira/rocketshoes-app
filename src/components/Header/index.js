import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartButton, Quantity} from './styles';

function Header({navigation, cartSize}) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
