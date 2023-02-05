import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import BaseTouchable from '../../components/BaseTouchable/BaseTouchable';
import {styles} from './GameSetup.style';
import {globalStyle} from '../../globals/styles/Global.style';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {BestOfGames} from '../../types/games/BestOfGames';
import {PointsPerGame} from '../../types/points-per-game/PointsPerGame';

const GameSetup = () => {
  const [playerAName, setPlayerAName] = useState('');
  const [playerBName, setPlayerBName] = useState('');
  const [scoringMethod, setScoringMethod] = useState<ScoringMethod>();
  const [bestOfGames, setBestOfGames] = useState<BestOfGames>();
  const [pointsPerGame, setPointsPerGame] = useState<PointsPerGame>();

  function pointsTo15() {
    return pointsPerGame === PointsPerGame.PointsTo15;
  }

  const americanTo15 = () => {
    return isAmericanScoring() && pointsTo15();
  };

  function isEnglishScoring() {
    return scoringMethod === ScoringMethod.EnglishScoring;
  }

  function americanTo11() {
    return isAmericanScoring() && pointsPerGame === PointsPerGame.PointsTo11;
  }

  function isAmericanScoring() {
    return scoringMethod === ScoringMethod.AmericanScoring;
  }

  return (
    <>
      <SafeAreaView style={styles.gameScreenContainer}>
        <View style={styles.gameSetupViewContainer}>
          <Text style={globalStyle.textHeading}>Players</Text>
          <TextInput
            style={styles.playerNameField}
            placeholder={'Player A Name'}
            onChangeText={updatedName => {
              setPlayerAName(updatedName);
            }}
            value={playerAName}
          />
          <TextInput
            style={styles.playerNameField}
            placeholder={'Player B Name'}
            onChangeText={updatedName => {
              setPlayerBName(updatedName);
            }}
            value={playerBName}
          />
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Scoring method</Text>
          <View>
            <BaseTouchable
              buttons={[
                {
                  text: 'American scoring',
                  onPress: () => {
                    setScoringMethod(ScoringMethod.AmericanScoring);
                  },
                  isDisabled: isEnglishScoring(),
                  testId: 'btn-americanScoring',
                },
                {
                  text: 'English scoring',
                  onPress: () => {
                    setScoringMethod(ScoringMethod.EnglishScoring);
                  },
                  isDisabled: isAmericanScoring(),
                  testId: 'btn-englishScoring',
                },
              ]}
            />
          </View>
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Best of (3 / 5) games</Text>
          <BaseTouchable
            buttons={[
              {
                text: 'Best of 3',
                onPress: () => {
                  setBestOfGames(BestOfGames.BestOf3);
                },
                isDisabled: bestOfGames === BestOfGames.BestOf5,
                testId: 'btn-bestOf3',
              },
              {
                text: 'Best of 5',
                onPress: () => {
                  setBestOfGames(BestOfGames.BestOf5);
                },
                isDisabled: bestOfGames === BestOfGames.BestOf3,
                testId: 'btn-bestOf5',
              },
            ]}
          />
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Points per game</Text>
          <BaseTouchable
            buttons={[
              {
                text: '15 points',
                onPress: () => {
                  setPointsPerGame(PointsPerGame.PointsTo15);
                },
                isDisabled: isEnglishScoring() || americanTo11(),
                testId: 'btn-15Points',
              },
              {
                text: '11 points',
                onPress: () => {
                  setPointsPerGame(PointsPerGame.PointsTo11);
                },
                isDisabled: isEnglishScoring() || americanTo15(),
                testId: 'btn-11Points',
              },
              {
                text: '9 points',
                onPress: () => {
                  setPointsPerGame(PointsPerGame.PointsTo9);
                },
                isDisabled: isAmericanScoring(),
                testId: 'btn-9Points',
              },
            ]}
          />
        </View>
        <View>
          <Button title={'Start game'} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GameSetup;
