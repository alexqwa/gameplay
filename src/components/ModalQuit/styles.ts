import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 174*2.8,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  contentTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  before: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 24,
    marginRight: 6
  },
  after: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
    textAlign: 'center',
    fontSize: 24,
  }
});