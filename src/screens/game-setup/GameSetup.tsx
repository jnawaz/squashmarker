import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import BaseTouchable from '../../components/BaseTouchable/BaseTouchable';
import {styles} from './GameSetup.style';
import {globalStyle} from '../../globals/styles/Global.style';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {BestOfGames} from '../../types/games/BestOfGames';
import {PointsPerGame} from '../../types/points-per-game/PointsPerGame';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GameData} from '../../types/game-data/GameData';

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

  const pointsTo15 = () => {
    return gameData?.pointsPerGame === PointsPerGame.PointsTo15;
  };

  const americanTo15 = () => {
    return isAmericanScoring() && pointsTo15();
  };

  const isEnglishScoring = () => {
    return gameData?.scoringSystem === ScoringMethod.EnglishScoring;
  };

  const americanTo11 = () => {
    return (
      isAmericanScoring() &&
      gameData?.pointsPerGame === PointsPerGame.PointsTo11
    );
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
          (gameData?.bestOfGames === BestOfGames.BestOf3 ||
            gameData?.bestOfGames === BestOfGames.BestOf5) &&
          (gameData?.pointsPerGame === PointsPerGame.PointsTo11 ||
            gameData?.pointsPerGame === PointsPerGame.PointsTo15)
        );
      case ScoringMethod.EnglishScoring:
        return (
          playerNamesFilledIn() &&
          (gameData?.bestOfGames === BestOfGames.BestOf3 ||
            gameData?.bestOfGames === BestOfGames.BestOf5) &&
          gameData?.pointsPerGame === PointsPerGame.PointsTo9
        );
    }
  };

  return (
    <>
      <SafeAreaView style={styles.gameScreenContainer}>
        <View style={styles.gameSetupViewContainer}>
          <Text style={globalStyle.textHeading}>Players</Text>
          <TextInput
            style={styles.playerNameField}
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
            style={styles.playerNameField}
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
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Scoring method</Text>
          <View>
            <BaseTouchable
              buttons={[
                {
                  text: 'American scoring',
                  onPress: () => {
                    setGameData(prevState => {
                      return {
                        ...prevState,
                        scoringSystem: ScoringMethod.AmericanScoring,
                      };
                    });
                  },
                  isDisabled: isEnglishScoring(),
                  testId: 'btn-americanScoring',
                },
                {
                  text: 'English scoring',
                  onPress: () => {
                    setGameData(prevState => {
                      return {
                        ...prevState,
                        scoringSystem: ScoringMethod.EnglishScoring,
                      };
                    });
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
                  setGameData(prevState => {
                    return {
                      ...prevState,
                      bestOfGames: BestOfGames.BestOf3,
                    };
                  });
                },
                isDisabled: gameData?.bestOfGames === BestOfGames.BestOf5,
                testId: 'btn-bestOf3',
              },
              {
                text: 'Best of 5',
                onPress: () => {
                  setGameData(prevState => {
                    return {
                      ...prevState,
                      bestOfGames: BestOfGames.BestOf5,
                    };
                  });
                },
                isDisabled: gameData?.bestOfGames === BestOfGames.BestOf3,
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
                  setGameData(prevState => {
                    return {
                      ...prevState,
                      pointsPerGame: PointsPerGame.PointsTo15,
                    };
                  });
                },
                isDisabled: isEnglishScoring() || americanTo11(),
                testId: 'btn-15Points',
              },
              {
                text: '11 points',
                onPress: () => {
                  setGameData(prevState => {
                    return {
                      ...prevState,
                      pointsPerGame: PointsPerGame.PointsTo11,
                    };
                  });
                },
                isDisabled: isEnglishScoring() || americanTo15(),
                testId: 'btn-11Points',
              },
              {
                text: '9 points',
                onPress: () => {
                  setGameData(prevState => {
                    return {
                      ...prevState,
                      pointsPerGame: PointsPerGame.PointsTo9,
                    };
                  });
                },
                isDisabled: isAmericanScoring(),
                testId: 'btn-9Points',
              },
            ]}
          />
        </View>
        <View>
          <PrimaryButton
            disabled={!canStartGame()}
            text={'Start game'}
            onPress={() => {
              console.log(gameData);
              navigation.navigate('Scoring', {
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
