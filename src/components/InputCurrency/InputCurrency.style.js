import { Platform } from 'react-native';
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    borderColor: '$inputBorderColor',
    borderRadius: '$inputBorderRadius',
    borderStyle: '$inputBorderStyle',
    borderWidth: '$inputBorderWidth',
    minHeight: '$inputTextHeight',
    paddingLeft: '$inputPaddingHorizontaL',
    paddingRight: '$inputPaddingHorizontaL',
    paddingBottom: '$inputPaddingVertical',
    paddingTop: '$inputPaddingVertical',
  },

  focus: {
    borderColor: '$inputBorderColorFocus',
    zIndex: 1,
  },

  input: {
    color: '$inputColor',
    fontFamily: '$inputFontFamily',
    fontSize: '$inputTextFontSize',
    fontWeight: '$inputFontWeight',
    height: '$inputTextHeight',
    opacity: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: 0,
    left: 0,
    zIndex: 1,
    ...Platform.select({ web: { outlineWidth: 0 } }),
  },

  value: {
    color: '$inputColor',
  },

  amounts: {
    alignItems: 'flex-end',
    flex: 1,
  },

  currentBalance: {
    gap: '$spaceXXS',
  },
});
