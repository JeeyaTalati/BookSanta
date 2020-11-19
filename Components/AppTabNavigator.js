import BookDonateScreen from '../Screens/BookDonateScreen';
import BookRequestScreen from '../Screens/BookRequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppStackNavigator} from './AppStackNavigator';
import {Image} from 'react-native';
import {React} from 'react';
 const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen:AppStackNavigator, 
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/icon1.png")} style={{width:20,height:20}}></Image>,
        tabBarLabel:"Donate Books"}
    },
    RequestBooks:{screen:BookRequestScreen, 
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20,height:20}}></Image>,
        tabBarLabel:"Read Books"}
    },
})
export default AppTabNavigator