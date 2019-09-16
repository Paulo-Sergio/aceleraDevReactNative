import { createStackNavigator, createAppContainer } from 'react-navigation';
import Acceleration from './screens/Acceleration';
import Profile from './screens/Profile';


const Router = createStackNavigator(
  {
    Acceleration: Acceleration,
    Profile: Profile
  },
  {
    headerMode: 'none'
  }
);


export default createAppContainer(Router);