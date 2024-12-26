import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.tsx';
import ThirdScreen from '../screens/ThirdScreen.tsx';

export const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Third"
                component={ThirdScreen}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;
