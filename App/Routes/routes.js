import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import Login from '../SignIn/Login'
import HomeScreen from '../Screens/HomeScreen'
import Cadastro from '../SignUp/Cadastro'
import Forgotten from '../RecoveryPass/Forgotten'

const AppNavigator = createStackNavigator(
    {
        Login,
        HomeScreen,
        Cadastro,
        Forgotten,
    },

    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)

export default createAppContainer(AppNavigator)