import { Navigation } from 'react-native-navigation';


export const goDayBefore = () => Navigation.setRoot({
  root: {
  	stack: {
  	  children: [{
  	  	component: {
  	  	  name: 'DayBefore',
  	  	  options: {
						topBar: {
							visible: false,
        			drawBehind: true,
        			animate: false
						}
					}
  	  	},
  	  }],
  	}
  }
});


export const goBack = () => Navigation.setRoot({
  root: {
  	stack: {
  	  children: [{
  	  	component: {
  	  	  name: 'DayBefore',
  	  	  options: {
						topBar: {
							visible: false,
        			drawBehind: true,
        			animate: false
						}
					}
  	  	},
  	  }],
  	}
  }
});