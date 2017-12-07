import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

export const App = Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Signin',
      screen: 'page.Signin',
      icon: require('./src/images/icons/unlocked.png'),
      title: 'Signin'
    },
    {
      label: 'Home',
      screen: 'page.Home',
      icon: require('./src/images/icons/home.png'),
      title: 'Home'
    }
  ]
});
