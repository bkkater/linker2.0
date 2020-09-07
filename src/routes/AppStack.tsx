import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Organization from '../pages/Organization';
import Calculator from '../pages/Calculator';
import Reports from '../pages/Reports';


import September from '../pages/Organization/September';
import October from '../pages/Organization/October';
import November from '../pages/Organization/November';
import December from '../pages/Organization/December';
import Export from '../pages/Export';
import Landing from '../pages/Landing';
import HomeFinancer from '../pages/HomeFinancer';
import ClientList from '../pages/ClientList';
import ClientReport from '../pages/ClientReport';



const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />

                <Screen name='Home' component={Home} />
                <Screen name='HomeFinancer' component={HomeFinancer} />

                <Screen name='Organization' component={Organization} />
                <Screen name='Calculator' component={Calculator} />

                <Screen name='September' component={September} />
                <Screen name='October' component={October} />
                <Screen name='November' component={November} />
                <Screen name='December' component={December} />

                <Screen name='Reports' component={Reports} />
                <Screen name='Export' component={Export} />

                <Screen name='ClientList' component={ClientList} />
                <Screen name='ClientReport' component={ClientReport} />



            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;