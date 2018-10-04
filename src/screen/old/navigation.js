import { Navigation } from 'react-native-navigation';

import {registerScreens} from '../screens';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

registerScreens();

//icons
// let graph, setting;
// MCIcon.getImageSource("finance", 40)
//   .then(icon => {
//     graph = icon;
//     return MCIcon.getImageSource("tune", 30);
//   })
//   .then(icon => {
//     setting = icon;
//   }).then(() => {
//     Navigation.startTabBasedApp({
//       tabs: [
//         {
//           label: 'Graph',
//           screen: 'Graph',
//           icon: graph,
//           title: 'Graph'

//         },
//         {
//           label: 'Setting',
//           screen: 'Setting',
//           icon: setting,
//           title: 'Setting'

//         }
//       ]
//     });
//   });


export const bottomTabs = () => Navigation.setRoot({
  root: {
  bottomTabs: {
    id: 'BottomTabsId',
    children: [
    {
      component: {
        name: 'Graph',
      options: {
        bottomTab: {
          icon: require('../img/graph.png')
        }
      }
      },
    },
    {
      component: {
        name: 'Setting',
      options: {
        bottomTab: {
          icon: require('../img/setting.png')
        }
      }
      },
    },
    ],
  }
  }
});



export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [{
        component: {
          name: 'Home',
        }
      }],
    }
  }
});