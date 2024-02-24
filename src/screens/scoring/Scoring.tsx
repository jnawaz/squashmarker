import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScoreContainer from './score-container/ScoreContainer';
import {GlobalStyles} from '../../global-styles/GlobalStyles';
import ServerSelection from '../../components/ServerSelection/ServerSelection';
import ScoringToolKit from '../../components/ScoringToolKit/ScoringToolKit';
import Timer from '../../components/Timer/Timer';
import {useGameData} from '../../contexts/GameContext';

const Scoring = ({navigation}: NativeStackScreenProps<any>) => {
  // const {gameContextData} = useGameDataC();
  const {data} = useGameData();

  useEffect(() => {
    const scoringElement = () => {
      return (
        <Text>
          {data.homePlayerGamesWon ?? 0} - {data.awayPlayerGamesWon ?? 0}
        </Text>
      );
    };

    navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => {
        return scoringElement();
      },
    });
  }, [navigation, data]);

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
