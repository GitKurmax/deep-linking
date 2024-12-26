import React from 'react';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {ScrollView, useColorScheme, View, SafeAreaView, StatusBar, Button, Text} from 'react-native';

const HomeScreenLayout = ({children}: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    {children}
               </View>
           </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreenLayout;
