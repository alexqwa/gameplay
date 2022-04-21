import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';

import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest } : ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <DiscordSvg width={24} height={18} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}