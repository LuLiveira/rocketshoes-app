import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  addProductToCart = id => {
    const { dispatch } = this.props; //Serve basicamente para disparar uma action ao redux

    dispatch(CartActions.addToCartRequest(id));
  };

  renderProducts(item) {
    const { amount } = this.props;
    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatBRL(item.price)}</ProductPrice>
        <AddButton onPress={() => this.addProductToCart(item.id)}>
          <BackgroundIcon>
            <Icon name="add-shopping-cart" size={26} color="#FFF" />
            <Text style={{ color: '#FFF' }}>{amount[item.id] || 0}</Text>
          </BackgroundIcon>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal={true}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => this.renderProducts(item)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
