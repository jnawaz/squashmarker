import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {BestOfGames} from '../../types/games/BestOfGames';
import {PointsPerGame} from '../../types/points-per-game/PointsPerGame';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GameData} from '../../types/game-data/GameData';
import {AppRoutes} from '../../routes/AppRoutes';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Colors } from "../../colors/Colors";

const GameSetup = ({navigation}: NativeStackScreenProps<any>) => {
  const [gameData, setGameData] = useState<GameData>({
    homePlayerPoints: 0,
    awayPlayerPoints: 0,
    currentGame: 1,
    servingFrom: undefined,
    playerServing: undefined,
    awayPlayerGamesWon: 0,
    awayPlayerName: undefined,
    bestOfGames: undefined,
    homePlayerGamesWon: 0,
    homePlayerName: undefined,
    pointsPerGame: undefined,
    scoringSystem: undefined,
  });
  const scoringMethodSegments: Array<string> = ['English', 'American'];
  const [currentScoringMethodIndex, setCurrentScoringMethodIndex] = useState(0);

  const bestOfSegments: Array<string> = ['Best of 3', 'Best of 5'];
  const [currentBestOf, setCurrentBestOf] = useState(0);

  const pointsPerGameSegments: Array<string> = ['To 11', 'To 15', 'To 9'];
  const [currentPointsPerGame, setCurrentPointsPerGame] = useState(0);

  const isScoringTo15 = () => {
    return gameData?.pointsPerGame === PointsPerGame.PointsTo15;
  };

  const americanTo15 = () => {
    return isAmericanScoring() && isScoringTo15();
  };

  const isEnglishScoring = () => {
    return gameData?.scoringSystem === ScoringMethod.EnglishScoring;
  };

  function isScoringTo11() {
    return gameData?.pointsPerGame === PointsPerGame.PointsTo11;
  }

  const americanTo11 = () => {
    return isAmericanScoring() && isScoringTo11();
  };

  const isAmericanScoring = () => {
    return gameData?.scoringSystem === ScoringMethod.AmericanScoring;
  };

  const playerNamesFilledIn = () => {
    return gameData?.homePlayerName !== '' && gameData?.awayPlayerName !== '';
  };

  const canStartGame = () => {
    switch (gameData?.scoringSystem) {
      case ScoringMethod.AmericanScoring:
        return (
          playerNamesFilledIn() &&
          (gameData!!.bestOfGames === BestOfGames.BestOf3 ||
            gameData!!.bestOfGames === BestOfGames.BestOf5) &&
          (gameData!!.pointsPerGame === PointsPerGame.PointsTo11 ||
            gameData!!.pointsPerGame === PointsPerGame.PointsTo15)
        );
      case ScoringMethod.EnglishScoring:
        return (
          playerNamesFilledIn() &&
          (gameData!!.bestOfGames === BestOfGames.BestOf3 ||
            gameData!!.bestOfGames === BestOfGames.BestOf5) &&
          gameData!!.pointsPerGame === PointsPerGame.PointsTo9
        );
    }
  };

  return (
    <>
      <SafeAreaView style={GlobalStyles.screenBackground}>
        <View>
          <Text style={{color: Colors.orange}}>Player details</Text>
          <KeyboardAvoidingView behavior={'height'}>
            <TextInput
              placeholder={'Player A Name'}
              onChangeText={updatedName => {
                setGameData(prevState => {
                  return {
                    ...prevState,
                    homePlayerName: updatedName,
                  };
                });
              }}
              value={gameData?.homePlayerName}
            />
            <TextInput
              placeholder={'Player B Name'}
              onChangeText={updatedName => {
                setGameData(prevState => {
                  return {
                    ...prevState,
                    awayPlayerName: updatedName,
                  };
                });
              }}
              value={gameData?.awayPlayerName}
            />
          </KeyboardAvoidingView>
        </View>
        <View>
          <Text style={{color: Colors.orange}}>Scoring method</Text>
          <SegmentedControl
            values={scoringMethodSegments}
            selectedIndex={currentScoringMethodIndex}
          />
        </View>
        <View>
          <Text style={{color: Colors.orange}}>Best of (3 / 5) games</Text>
          <SegmentedControl
            values={bestOfSegments}
            selectedIndex={currentBestOf}
          />
        </View>
        <View>
          <Text style={{color: Colors.orange}}>Points per game</Text>
          <SegmentedControl
            values={pointsPerGameSegments}
            selectedIndex={currentScoringMethodIndex}
            onValueChange={value => {
              console.log(value);
            }}
          />
        </View>
        <View>
          <PrimaryButton
            disabled={!canStartGame()}
            text={'Start game'}
            onPress={() => {
              console.log(gameData);
              navigation.navigate(AppRoutes.Scoring, {
                gameData,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GameSetup;
