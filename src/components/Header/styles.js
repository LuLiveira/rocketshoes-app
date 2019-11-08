import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  padding: 10px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})``;

export const CartButton = styled(RectButton)`
  flex-direction: row;
  color: #fff;
`;

export const Icon = styled.Image.attrs({
  source: cart,
})``;

export const Quantity = styled.Text`
  color: #fff;
`;
