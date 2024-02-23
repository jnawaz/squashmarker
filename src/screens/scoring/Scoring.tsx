import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {ServiceBox} from '../../types/service-box/ServiceBox';
import ScoreContainer from './score-container/ScoreContainer';
import {GlobalStyles} from '../../global-styles/GlobalStyles';
import {ColorDefinitions} from '../../colors/Colors';
import {useGameDataContext} from '../../contexts/GameDataContext';
import ServerSelection from '../../components/ServerSelection/ServerSelection';
import ScoringToolKit from '../../components/ScoringToolKit/ScoringToolKit';
import Timer from "../../components/Timer/Timer";

const Scoring = ({navigation}: NativeStackScreenProps<any>) => {
  const {gameContextData} = useGameDataContext();

  useEffect(() => {
    const scoringElement = () => {
      return (
        <Text>
          {gameContextData!.homePlayerGamesWon ?? 0} -{' '}
          {gameContextData?.awayPlayerGamesWon ?? 0}
        </Text>
      );
    };

    navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => {
        return scoringElement();
      },
    });
  }, [navigation, gameContextData]);

  return (
    <SafeAreaView style={[GlobalStyles.screenBackground]}>
      <ScrollView>
        <Timer />
        <ScoreContainer />
        <ServerSelection />
        <ScoringToolKit />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scoring;
