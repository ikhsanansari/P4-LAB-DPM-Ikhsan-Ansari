// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainMatch from './src/pages/ParentComponent';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MainMatch />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});

export default App;
