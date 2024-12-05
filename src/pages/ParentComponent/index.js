// src/pages/MainMatch/index.js
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Match from '../../components/ChildComponent';

const MainMatch = () => {
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const handleIncrease = (team) => {
        if (team === 'A') {
            const newScore = teamAScore + 1;
            setTeamAScore(newScore);
            checkWinner(newScore, teamBScore);
        } else {
            const newScore = teamBScore + 1;
            setTeamBScore(newScore);
            checkWinner(teamAScore, newScore);
        }
    };

    const handleDecrease = (team) => {
        if (team === 'A') {
            setTeamAScore(Math.max(0, teamAScore - 1));
        } else {
            setTeamBScore(Math.max(0, teamBScore - 1));
        }
    };

    const checkWinner = (scoreA, scoreB) => {
        if (scoreA === 10) {
            Alert.alert('Selamat', 'Tim A Menang!');
        } else if (scoreB === 10) {
            Alert.alert('Selamat', 'Tim B Menang!');
        }
    };

    const handleReset = () => {
        setTeamAScore(0);
        setTeamBScore(0);
    };

    return (
        <Match
            teamA={{ name: 'Team A', score: teamAScore }}
            teamB={{ name: 'Team B', score: teamBScore }}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onReset={handleReset}
        />
    );
};

export default MainMatch;
