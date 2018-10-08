import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./screen/Home').default);
  Navigation.registerComponent('DayBefore', () => require('./screen/DayBefore').default);
}