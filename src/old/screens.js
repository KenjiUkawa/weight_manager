import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./screen/Home').default);
  Navigation.registerComponent('Setting', () => require('./screen/Setting').default);
  Navigation.registerComponent('Graph', () => require('./screen/Graph').default);
}