import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import Login from '../SignUp/Login'
import HomeScreen from '../Screens/HomeScreen'
//import Historico from '../Historic/Historico'
//import Splash from '../SplashScreen/Splash'

const AppNavigator = createStackNavigator(
    {
        Login,
        HomeScreen,
    },

    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)

export default createAppContainer(AppNavigator)