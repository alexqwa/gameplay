import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = { 
  isCentered?: boolean;
}

export function ListDivider({ isCentered } : Props) {
  return (
    <View style={[
      styles.container,
      isCentered ? {
        marginVertical: 20,
      } : {
        marginTop: 2,
        marginBottom: 32,
      }
    ]} />
  );
}