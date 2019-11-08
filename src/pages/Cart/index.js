import React from 'react';
import {Text, StyleSheet} from 'react-native';

// import { Container } from './styles';
const styles = StyleSheet.create({
  titulo: {
    color: 'red',
  },
});

export default function Cart() {
  return <Text style={styles.titulo}>Hello World</Text>;
}
