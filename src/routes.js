
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler'
import Main from './pages/main';


export const AppNavigator = createStackNavigator({
    home: {screen: Main, title: 'First'}
  });

  export default createAppContainer(AppNavigator);

