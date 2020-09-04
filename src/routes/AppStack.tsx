import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Organization from '../pages/Organization';


const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='Home' component={Home} />
                <Screen name='Organization' component={Organization} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;