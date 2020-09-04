import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Organization from '../pages/Organization';
import Calculator from '../pages/Calculator';

import September from '../pages/Organization/September';
import October from '../pages/Organization/October';
import November from '../pages/Organization/November';
import December from '../pages/Organization/December';



const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='Home' component={Home} />
                <Screen name='Organization' component={Organization} />
                <Screen name='Calculator' component={Calculator} />

                <Screen name='September' component={September} />
                <Screen name='October' component={October} />
                <Screen name='November' component={November} />
                <Screen name='December' component={December} />


            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;