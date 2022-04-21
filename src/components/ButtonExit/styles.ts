import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.heading,
    fontSize: 15,
    alignItems: 'center',
    fontFamily: theme.fonts.text400,
  },
  highlight: {
    width: 160,
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});