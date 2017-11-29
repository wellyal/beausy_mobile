import {Navigation} from 'react-native-navigation';

import Signin from './../components/pages/Signin';
import Home from './../components/pages/Home';

export function registerScreens() {
  Navigation.registerComponent('page.Signin', () => Signin);
  Navigation.registerComponent('page.Home', () => Home);
}
