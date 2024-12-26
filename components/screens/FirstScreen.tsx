import React from 'react';
import {Text, View, Button} from 'react-native';
import HomeScreenLayout from '../HomeScreenLayout.tsx';

function SecondScreen({navigation}: any) {
    return (
        <HomeScreenLayout>
            <View>
                <Text>
                    First Screen
                </Text>
                <Button
                    onPress={() => navigation.navigate('Second')}
                    title={'Go to second screen'}
                />
                <Button
                    onPress={() => navigation.navigate('Third')}
                    title={'Go to third screen'}
                />
            </View>
        </HomeScreenLayout>
    );
}

export default SecondScreen;
