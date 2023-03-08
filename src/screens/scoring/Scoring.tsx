import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';
import ScoringButtons from '../../components/ScoringButtons/ScoringButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ResetMatchButton from '../../components/ResetMatchButton/ResetMatchButton';
import ServicePicker from '../../components/ServicePicker/ServicePicker';
import {GameData} from '../../types/game-data/GameData';

const Scoring = ({navigation, route}: NativeStackScreenProps<any>) => {
  const gameData: GameData = route.params?.game;

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  }, [navigation, route.params?.game]);

  return (
    <SafeAreaView style={styles.scoringContainer}>
      <View>
        <View style={styles.gameStateContainer}>
          <View style={styles.homeScoreContainer}>
            <ScoreIndicator />
          </View>
          <View style={styles.awayScoreContainer}>
            <ScoreIndicator />
          </View>
        </View>
        <View style={styles.scoringControlsContainer}>
          <ScoringButtons
            homeButtons={true}
            incrementPoint={() => {
              gameData.homePlayerPoints! += 1;
              console.log(gameData);
            }}
            handout={() => {
              throw new Error('Function not implemented.');
            }}
            let={() => {
              throw new Error('Function not implemented.');
            }}
            stroke={() => {
              throw new Error('Function not implemented.');
            }}
          />
          <ScoringButtons
            awayButtons={true}
            incrementPoint={() => {
              throw new Error('Function not implemented.');
            }}
            handout={() => {
              throw new Error('Function not implemented.');
            }}
            let={() => {
              throw new Error('Function not implemented.');
            }}
            stroke={() => {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>
      <ServicePicker homePlayerName={'TestA'} awayPlayerName={'Test B'} />
      <View>
        <ResetMatchButton />
      </View>
    </SafeAreaView>
  );
};

export default Scoring;
