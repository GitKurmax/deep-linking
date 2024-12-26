import React from 'react';
import {Text, View} from 'react-native';
import HomeScreenLayout from '../HomeScreenLayout.tsx';

function ThirdScreen() {
    return (
        <HomeScreenLayout>
            <View>
                <Text>
                    Third Screen
                </Text>
            </View>
        </HomeScreenLayout>
    );
}

export default ThirdScreen;
