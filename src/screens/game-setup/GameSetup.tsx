import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
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
import SegmentedControl, {
  FontStyle,
} from '@react-native-segmented-control/segmented-control';
import {Typography} from '../../Typography/Typography';
import {ColorDefinitions, Colors} from '../../colors/Colors';
import {style} from './GameSetup.style';
import {
  VerticalPadding,
  VerticalPaddingBottom,
  VerticalPaddingTop,
} from '../../Layout/Padding';

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
  const englishScoringMethodSegments: Array<string> = ['English', 'American'];
  const [currentScoringMethodIndex, setCurrentScoringMethodIndex] = useState(0);

  const bestOfSegments: Array<string> = ['Best of 3', 'Best of 5'];
  const [currentBestOf, setCurrentBestOf] = useState(0);

  const americanPointsPerGameSegments: Array<string> = ['To 11', 'To 15'];
  const [americanCurrentPointsPerGame, setAmericanCurrentPointsPerGame] =
    useState(0);

  const englishPointsPerGameSegment: Array<string> = ['To 9'];
  const [englishCurrentPointsPerGame, setEnglishCurrentPointsPerGame] =
    useState(0);

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

  const segmentControlFont: FontStyle = {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
    color: '#000000',
  };

  const activeControlFont: FontStyle = {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Regular',
    color: ColorDefinitions.white,
  };

  return (
    <>
      <SafeAreaView
        style={[GlobalStyles.screenBackground, GlobalStyles.containerPadding]}>
        <ScrollView>
          <Text style={[Typography.h2, Colors.orange, VerticalPadding.xs]}>
            Player details
          </Text>
          <KeyboardAvoidingView behavior={'height'}>
            <Text style={[Typography.h3, Colors.green, VerticalPadding.s]}>
              Home Player
            </Text>
            <TextInput
              autoCorrect={false}
              style={style.primaryInput}
              placeholderTextColor={ColorDefinitions.white}
              placeholder={'Home Player'}
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
            <Text style={[Typography.h3, Colors.green, VerticalPadding.s]}>
              Away Player
            </Text>
            <TextInput
              autoCorrect={false}
              style={style.primaryInput}
              placeholderTextColor={ColorDefinitions.white}
              placeholder={'Away Player'}
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

          <View>
            <Text
              style={[
                Typography.h2,
                Colors.orange,
                VerticalPaddingTop.m,
                VerticalPaddingBottom.s,
              ]}>
              Scoring method
            </Text>
            <SegmentedControl
              tintColor={ColorDefinitions.green400}
              fontStyle={segmentControlFont}
              activeFontStyle={activeControlFont}
              backgroundColor={ColorDefinitions.green500}
              style={{height: 44}}
              values={englishScoringMethodSegments}
              selectedIndex={currentScoringMethodIndex}
              onValueChange={value => {
                let scoringMethod: ScoringMethod;
                let pointsPerGame: PointsPerGame;

                if (value === 'American') {
                  setCurrentScoringMethodIndex(1);
                  scoringMethod = ScoringMethod.AmericanScoring;
                  pointsPerGame = PointsPerGame.PointsTo11;
                } else {
                  setCurrentScoringMethodIndex(0);
                  scoringMethod = ScoringMethod.EnglishScoring;
                  pointsPerGame = PointsPerGame.PointsTo9;
                }

                setGameData(prevState => {
                  return {
                    ...prevState,
                    scoringSystem: scoringMethod,
                    pointsPerGame: pointsPerGame,
                  };
                });
              }}
            />
          </View>
          <View>
            <Text
              style={[
                Typography.h2,
                Colors.orange,
                VerticalPaddingTop.m,
                VerticalPaddingBottom.s,
              ]}>
              Best of (3 / 5) games
            </Text>
            <SegmentedControl
              tintColor={ColorDefinitions.green400}
              fontStyle={segmentControlFont}
              activeFontStyle={activeControlFont}
              backgroundColor={ColorDefinitions.green500}
              style={{height: 44}}
              values={bestOfSegments}
              selectedIndex={currentBestOf}
            />
          </View>
          <View>
            <Text
              style={[
                Typography.h2,
                Colors.orange,
                VerticalPaddingTop.m,
                VerticalPaddingBottom.s,
              ]}>
              Points per game
            </Text>
            <SegmentedControl
              tintColor={ColorDefinitions.green400}
              fontStyle={segmentControlFont}
              activeFontStyle={activeControlFont}
              style={{height: 44}}
              values={
                currentScoringMethodIndex === 0
                  ? englishPointsPerGameSegment
                  : americanPointsPerGameSegments
              }
              selectedIndex={currentScoringMethodIndex}
              backgroundColor={ColorDefinitions.green500}
            />
          </View>
          <View>
            <PrimaryButton
              disabled={!canStartGame()}
              text={'Start game'}
              onPress={() => {
                navigation.navigate(AppRoutes.Scoring, {
                  gameData,
                });
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default GameSetup;
