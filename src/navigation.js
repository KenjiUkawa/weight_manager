import { Navigation } from 'react-native-navigation';


export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Home',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
});


export const goToDayBefore = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'DayBefore',
      children: [
        {
          component: {
            name: 'DayBefore',
          }
        }
    ],
    }
  }
});