import React, {useEffect, useLayoutEffect, useState} from 'react';
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
import {GlobalStyles} from '../../global-styles/GlobalStyles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {Typography} from '../../typography/Typography';
import {ColorDefinitions, Colors} from '../../colors/Colors';
import {style} from './GameSetup.style';
import {
  VerticalPadding,
  VerticalPaddingBottom,
  VerticalPaddingTop,
} from '../../layout/Padding';
import {AppRoutes} from '../../routes/AppRoutes';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {
  activeControlFont,
  segmentControlFont,
} from '../../components/SharedStyles/SegmentStyle';
import {initialData, useGameData} from '../../contexts/GameContext';

const GameSetup = ({navigation}: NativeStackScreenProps<any>) => {
  const {
    data,
    setHomePlayerName,
    setAwayPlayerName,
    setScoringMethod,
    setBestOfGames,
    setPointsPerGame,
  } = useGameData();

  const englishScoringMethodSegments: Array<string> = ['English', 'American'];
  const [currentScoringMethodIndex, setCurrentScoringMethodIndex] = useState(0);

  const bestOfSegments: Array<string> = ['Best of 3', 'Best of 5'];
  const [currentBestOf, setCurrentBestOf] = useState(0);

  const americanPointsPerGameSegments: Array<string> = ['To 11', 'To 15'];

  const englishPointsPerGameSegment: Array<string> = ['To 9'];

  const [americanPointsSelectedIndex] = useState(0);
  const [englishPointsSelectedIndex] = useState(0);

  const playerNamesFilledIn = () => {
    return data.homePlayerName !== '' && data.awayPlayerName !== '';
  };

  const canStartGame = () => {
    switch (data.scoringSystem) {
      case ScoringMethod.AmericanScoring:
        const canStart =
          playerNamesFilledIn() &&
          (data.bestOfGames === BestOfGames.BestOf3 ||
            data.bestOfGames === BestOfGames.BestOf5) &&
          (data.pointsPerGame === PointsPerGame.PointsTo11 ||
            data.pointsPerGame === PointsPerGame.PointsTo15);
        return canStart;

      case ScoringMethod.EnglishScoring:
        const canStartEnglish =
          playerNamesFilledIn() &&
          data.bestOfGames != null &&
          data.pointsPerGame === PointsPerGame.PointsTo9;
        return canStartEnglish;
    }
  };

  useEffect(() => {
    if (data === initialData) {
      console.log('setting defaults');
      setCurrentScoringMethodIndex(0);
      setCurrentBestOf(0);
      setPointsPerGame(PointsPerGame.PointsTo9);
    }
  }, [data, setBestOfGames, setPointsPerGame, setScoringMethod]);

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
              setHomePlayerName(updatedName);
            }}
            value={data.homePlayerName}
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
              setAwayPlayerName(updatedName);
            }}
            value={data.awayPlayerName}
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
            onChange={event => {
              setCurrentScoringMethodIndex(
                event.nativeEvent.selectedSegmentIndex,
              );
              setScoringMethod(
                event.nativeEvent.selectedSegmentIndex === 0
                  ? ScoringMethod.EnglishScoring
                  : ScoringMethod.AmericanScoring,
              );
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
            onChange={event => {
              setCurrentBestOf(event.nativeEvent.selectedSegmentIndex);
              setBestOfGames(
                event.nativeEvent.selectedSegmentIndex === 0
                  ? BestOfGames.BestOf3
                  : BestOfGames.BestOf5,
              );
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
              data.scoringSystem === ScoringMethod.EnglishScoring
                ? englishPointsPerGameSegment
                : americanPointsPerGameSegments
            }
            selectedIndex={
              data.scoringSystem === ScoringMethod.AmericanScoring
                ? americanPointsSelectedIndex
                : englishPointsSelectedIndex
            }
            backgroundColor={ColorDefinitions.green500}
            onChange={event => {
              if (data.scoringSystem === ScoringMethod.AmericanScoring) {
                if (event.nativeEvent.selectedSegmentIndex === 0) {
                  setPointsPerGame(PointsPerGame.PointsTo11);
                } else {
                  setPointsPerGame(PointsPerGame.PointsTo15);
                }
              } else {
                setPointsPerGame(PointsPerGame.PointsTo9);
              }
            }}
          />
        </View>
        <View>
          <PrimaryButton
            disabled={!canStartGame()}
            text={'Start game'}
            onPress={() => {
              navigation.navigate(AppRoutes.Scoring);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameSetup;
