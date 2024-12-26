import React from 'react';
import SecondScreen from './SecondScreen.tsx';
import {Stack} from '../navigation/RootStack.tsx';
import FirstScreen from './FirstScreen.tsx';


const HomeScreen: React.FC<any> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="First" component={FirstScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Second" component={SecondScreen} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    );
};

export default HomeScreen;
