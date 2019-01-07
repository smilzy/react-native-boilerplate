import {
  StyleSheet,
} from 'react-native';

export const COLORS = {
  BLUE: {
    LIGHT: '#3aa0d8',
    DARK: '#243b4f',
    BUTTON: '#2F80ED',
  },
  ORANGE: {
    LIGHT: '#fb4a34',
    DARK: '#fa3a22',
  },
  WHITE: {
    WHITE: '#FFFFFF',
  },
  GRAY: {
    LIGHT: '#DBDBDB',
    DARK: '#C4C4C4',
    BORDER_BOTTOM: '#BDBDBD',
    LABEL: '#828282',
  },
  GREEN: {
    LIGHT: '#E7F5ED',
    DARK: '#219653',
  },
  RED: {
    LIGHT: '#eb4222',
    BORDER: '#e92600',
  },
  PURPLE: {
    LIGHT: '#39307a',
    BORDER: '#2a106e',
  },
}

export const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 110,
    height: 92,
    marginBottom: 30,
  },
  content: {
    flex: 7,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.BLUE.DARK,
    marginBottom: 50,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.BLUE.DARK,
    width: '65%',
  },
  input: {
    width: '65%',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.GRAY.BORDER_BOTTOM,
    height: 26,
    padding: 5,
    marginBottom: 10,
  },
  highlightButton: {
    marginTop: 49,
    backgroundColor: COLORS.BLUE.BUTTON,
    padding: 13,
    width: 146,
    height: 46,
    borderRadius: 23,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  }
})

export const drawerItemsStyles = StyleSheet.create({
  header: {
    // height: 105,
    padding: 20,
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheader: {
    justifyContent: 'center',
    padding: 15,
  },
  label: {
    color: '#828282',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 79,
    height: 66,
  },
  drawerElement: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    paddingRight: 20,
  },
})
