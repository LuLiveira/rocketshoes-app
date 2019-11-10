import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const ProductContainer = styled.View`
  background: #fff;
  margin: 10px;
  border-radius: 4px;
`;

export const Product = styled.View`
  flex-direction: row;
  background: #fff;
  margin: 10px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfo = styled.View`
  justify-content: center;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  background: #eee;
  align-items: center;
  margin: 10px;
  padding: 0 0 0 5px;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  background: #fff;
  width: 60px;
  margin: 10px;
  max-height: 35px;
  border-radius: 4px;
  padding-left: 10px;
`;

export const TotalPrice = styled.Text`
  margin-left: 140px;
`;

export const Total = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TotalLabel = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const TotalValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  font-size: 24px;
  font-weight: bold;
  background: #7159c1;
  align-items: center;
  margin: 10px;
  width: 350px;
  border-radius: 4px;
`;

export const FinishText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const ContentButton = styled.View`
  align-items: center;
`;

export const EmptyCart = styled.View`
  background: #fff;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const EmptyText = styled.Text`
  font-size: 26px;
`;

export const IncrementItemButton = styled.TouchableOpacity``;

export const DecrementItemButton = styled.TouchableOpacity``;
