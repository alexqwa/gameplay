import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, Text } from 'react-native';

import { Background } from '../Background';
import { ButtonExit } from '../ButtonExit';

import { styles } from './styles';
 
type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalQuit({ children, closeModal, ...rest } : Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.contentTitle}>
              <Text style={styles.before}>Deseja sair do</Text>
              <Text style={styles.after}>GamePlay?</Text>
            </View>
            { children }
          </Background>
        </View>
      </View>
    </Modal>
  );
}