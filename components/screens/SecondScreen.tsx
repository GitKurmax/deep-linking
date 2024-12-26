import React from 'react';
import {Button, Text, View} from 'react-native';
import HomeScreenLayout from '../HomeScreenLayout';

function SecondScreen({navigation}: any) {
    return (
        <HomeScreenLayout>
            <View>
                <Text>
                    Second Screen
                </Text>
                <Button
                    onPress={() => navigation.navigate('First')}
                    title={'Go to first screen'}
                />
            </View>
        </HomeScreenLayout>
    );
}

export default SecondScreen;
