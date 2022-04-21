import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  isHighlighted: boolean;
}

export function ButtonExit({ title, isHighlighted, ...rest } : Props) {
  return (
    <RectButton style={ isHighlighted ? styles.highlight : styles.container} {...rest}>
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}