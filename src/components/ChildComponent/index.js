// src/components/Match/index.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Match = ({ teamA, teamB, onIncrease, onDecrease, onReset }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Match Information</Text>
            
            {/* Team A Section */}
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{teamA.name}</Text>
                <View style={styles.scoreRow}>
                    <Button title="-" onPress={() => onDecrease('A')} />
                    <Text style={styles.score}>{teamA.score}</Text>
                    <Button title="+" onPress={() => onIncrease('A')} />
                </View>
            </View>

            {/* Team B Section */}
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{teamB.name}</Text>
                <View style={styles.scoreRow}>
                    <Button title="-" onPress={() => onDecrease('B')} />
                    <Text style={styles.score}>{teamB.score}</Text>
                    <Button title="+" onPress={() => onIncrease('B')} />
                </View>
            </View>

            {/* Reset Button */}
            <Button title="Reset Match" onPress={onReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teamContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    teamName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scoreRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10, // Jarak standar antara tombol dan skor
    },
    score: {
        fontSize: 24,
        marginHorizontal: 10, // Memberikan jarak horizontal di sekitar skor
    },
});

export default Match;
