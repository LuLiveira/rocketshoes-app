import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';

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

  addProductToCart = products => {
    const {dispatch} = this.props; //Serve basicamente para disparar uma action ao redux

    dispatch(CartActions.addToCart(products));
  };

  renderProducts(item) {
    return (
      <Product>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton onPress={() => this.addProductToCart(item)}>
          <BackgroundIcon>
            <Icon name="add-shopping-cart" size={26} color="#FFF" />
            <Text style={{color: '#FFF'}}>1</Text>
          </BackgroundIcon>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal={true}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => this.renderProducts(item)}
        />
      </Container>
    );
  }
}

export default connect()(Home);
