import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';
import ScoringButtons from '../../components/ScoringButtons/ScoringButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ResetMatchButton from '../../components/ResetMatchButton/ResetMatchButton';

const Scoring = ({navigation}: NativeStackScreenProps<any>) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
    });
  }, [navigation]);

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
      <View>
        <ResetMatchButton />
      </View>
    </SafeAreaView>
  );
};

export default Scoring;
