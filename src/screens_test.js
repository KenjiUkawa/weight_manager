import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./screen/test/Home').default);
  Navigation.registerComponent('Initializing', () => require('./screen/test/Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./screen/test/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./screen/test/SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./screen/test/Screen2').default);
}