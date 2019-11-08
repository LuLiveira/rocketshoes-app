import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

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

export default class Home extends Component {
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

  renderProducts(item) {
    return (
      <Product>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
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
