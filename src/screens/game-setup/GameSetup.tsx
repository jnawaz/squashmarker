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
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Typography} from '../../Typography/Typography';
import {ColorDefinitions, Colors} from '../../colors/Colors';
import {style} from './GameSetup.style';
import {
  VerticalPadding,
  VerticalPaddingBottom,
  VerticalPaddingTop,
} from '../../Layout/Padding';
import {AppRoutes} from '../../routes/AppRoutes';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {
  activeControlFont,
  segmentControlFont,
} from '../../components/SharedStyles/SegmentStyle';
import {GameData} from '../../types/game-data/GameData';

const GameSetup = ({navigation}: NativeStackScreenProps<any>) => {
  const {gameContextData, updateGameContextData} = useGameDataContext();

  const englishScoringMethodSegments: Array<string> = ['English', 'American'];
  const [currentScoringMethodIndex, setCurrentScoringMethodIndex] = useState(0);

  const bestOfSegments: Array<string> = ['Best of 3', 'Best of 5'];
  const [currentBestOf, setCurrentBestOf] = useState(0);

  const americanPointsPerGameSegments: Array<string> = ['To 11', 'To 15'];
  const [americanCurrentPointsPerGame, setAmericanCurrentPointsPerGame] =
    useState<PointsPerGame>(PointsPerGame.PointsTo11);

  const englishPointsPerGameSegment: Array<string> = ['To 9'];
  const [englishCurrentPointsPerGame, setEnglishCurrentPointsPerGame] =
    useState<PointsPerGame>(PointsPerGame.PointsTo9);

  const playerNamesFilledIn = () => {
    return (
      gameContextData!.homePlayerName !== '' &&
      gameContextData!.awayPlayerName !== ''
    );
  };

  const canStartGame = () => {
    switch (gameContextData?.scoringSystem) {
      case ScoringMethod.AmericanScoring:
        return (
          playerNamesFilledIn() &&
          (gameContextData?.bestOfGames === BestOfGames.BestOf3 ||
            gameContextData?.bestOfGames === BestOfGames.BestOf5) &&
          (gameContextData?.pointsPerGame === PointsPerGame.PointsTo11 ||
            gameContextData?.pointsPerGame === PointsPerGame.PointsTo15)
        );
      case ScoringMethod.EnglishScoring:
        return (
          playerNamesFilledIn() &&
          (gameContextData?.bestOfGames === BestOfGames.BestOf3 ||
            gameContextData?.bestOfGames === BestOfGames.BestOf5) &&
          gameContextData?.pointsPerGame === PointsPerGame.PointsTo9
        );
    }
  };

  return (
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
              updateGameContextData((gameContextData: GameData) => {
                return {
                  ...gameContextData,
                  homePlayerName: updatedName,
                };
              });
            }}
            value={gameContextData?.homePlayerName}
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
              updateGameContextData(gameData => {
                return {
                  ...gameData,
                  awayPlayerName: updatedName,
                };
              });
            }}
            value={gameContextData?.awayPlayerName}
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
                setAmericanCurrentPointsPerGame(pointsPerGame);
              } else {
                setCurrentScoringMethodIndex(0);
                scoringMethod = ScoringMethod.EnglishScoring;
                setEnglishCurrentPointsPerGame(PointsPerGame.PointsTo9);
                pointsPerGame = PointsPerGame.PointsTo9;
              }

              updateGameContextData(gameData => {
                return {
                  ...gameData,
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
            onValueChange={value => {
              console.log(`${value}`);
              let selectedBestOfGames: BestOfGames;
              if (value === 'Best of 3') {
                selectedBestOfGames = BestOfGames.BestOf3;
                console.log(`${selectedBestOfGames}`);
              } else {
                selectedBestOfGames = BestOfGames.BestOf5;
              }

              updateGameContextData(gameData => {
                return {
                  ...gameData,
                  bestOfGames: selectedBestOfGames,
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
            selectedIndex={
              currentScoringMethodIndex === 0 ? 0 : americanCurrentPointsPerGame
            }
            backgroundColor={ColorDefinitions.green500}
            onValueChange={value => {
              if (value === 'To 11') {
                setAmericanCurrentPointsPerGame(PointsPerGame.PointsTo11);
              } else if (value === 'To 15') {
                setAmericanCurrentPointsPerGame(PointsPerGame.PointsTo15);
              } else {
                setEnglishCurrentPointsPerGame(PointsPerGame.PointsTo9);
              }
            }}
          />
        </View>
        <View>
          <PrimaryButton
            disabled={!canStartGame()}
            text={'Start game'}
            onPress={() => {
              updateGameContextData(gameData => {
                return {
                  ...gameData,
                  homePlayerPoints: 0,
                  awayPlayerPoints: 0,
                };
              });
              navigation.navigate(AppRoutes.Scoring);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameSetup;
