import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  width: 200px;
  height: 350px;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  margin-left: 5px;
  font-weight: bold;
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  border: 0;
  background: #7159c1;
  border-radius: 4px;
  margin: auto 5px 5px 5px;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const BackgroundIcon = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  padding: 6px;
`;
