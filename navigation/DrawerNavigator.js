import React from 'react';
import TabNavigator from '../navigation/TabNavigator';
import {CreateDrawerNavigator} from 'react-navigation/drawer';
import Profile from '../screens/Profile';

const Drawer= createDrawerNavigator();

const DrawerNavigator=()=>{
 return(   
    <Drawer.Navigator>
        <Screen.Name name= "Home" component={TabNavigator}></Screen.Name>
        <Screen.Name name= "Profile" component={Profile}></Screen.Name>
    </Drawer.Navigator>
 );
};

export default DrawerNavigator;