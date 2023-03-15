import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';
import ScoringButtons from '../../components/ScoringButtons/ScoringButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ResetMatchButton from '../../components/ResetMatchButton/ResetMatchButton';
import ServicePicker from '../../components/ServicePicker/ServicePicker';
import {GameData} from '../../types/game-data/GameData';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {ServiceBox} from '../../types/service-box/ServiceBox';

const Scoring = ({navigation, route}: NativeStackScreenProps<any>) => {
  const [gameData, setGameData] = useState<GameData>(route.params?.gameData);

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => (
        <Text style={styles.gamesScore}>
          {gameData.homePlayerGamesWon ?? 0} -{' '}
          {gameData.awayPlayerGamesWon ?? 0}
        </Text>
      ),
    });
  }, [navigation, route.params?.game, gameData]);

  const isAmericanScoring = () => {
    return gameData.scoringSystem === ScoringMethod.AmericanScoring;
  };
  const isEnglishScoring = () => {
    return gameData.scoringSystem === ScoringMethod.EnglishScoring;
  };
  const incrementScoreFor = (playerName: string) => {
    if (serverDefined()) {
      if (playerName === gameData.homePlayerName) {
        setGameData(prevState => {
          return {
            ...prevState,
            homePlayerPoints: (prevState.homePlayerPoints! += 1),
          };
        });
      } else {
        setGameData(prevState => {
          return {
            ...prevState,
            awayPlayerPoints: (prevState.awayPlayerPoints! += 1),
          };
        });
      }
    }
  };
  const isHomePlayerServing = () => {
    return gameData.playerServing === gameData.homePlayerName;
  };

  const switchServingPlayer = () => {
    if (gameData.playerServing === gameData.homePlayerName) {
      setGameData(prevState => {
        return {
          ...prevState,
          playerServing: prevState.awayPlayerName,
        };
      });
    } else {
      setGameData(prevState => {
        return {
          ...prevState,
          playerServing: prevState.homePlayerName,
        };
      });
    }
  };
  const serverDefined = () => {
    return gameData.playerServing !== undefined;
  };

  const serviceBoxDefined = () => {
    return gameData.servingFrom !== undefined;
  };

  const resetServingFrom = () => {
    setGameData(prevState => {
      return {
        ...prevState,
        servingFrom: undefined,
      };
    });
  };

  const switchServiceBox = () => {
    if (gameData.servingFrom === ServiceBox.Left) {
      setGameData(prevState => {
        return {
          ...prevState,
          servingFrom: ServiceBox.Right,
        };
      });
    } else if (gameData.servingFrom === ServiceBox.Right) {
      setGameData(prevState => {
        return {
          ...prevState,
          servingFrom: ServiceBox.Left,
        };
      });
    }
  };

  const isAwayPlayerServing = () => {
    return gameData.playerServing === gameData.awayPlayerName;
  };

  const resetScores = () => {
    setGameData(prevState => {
      return {
        ...prevState,
        homePlayerPoints: 0,
        awayPlayerPoints: 0,
      };
    });
  };

  const hasWonGame = (playerName: string) => {
    switch (playerName) {
      case gameData.homePlayerName: {
        return gameData.homePlayerPoints === gameData.pointsPerGame! - 1;
      }
      case gameData.awayPlayerName: {
        return gameData.awayPlayerPoints === gameData.pointsPerGame! - 1;
      }
    }
  };
  const incrementGameScore = (playerName: string) => {
    switch (playerName) {
      case gameData.homePlayerName: {
        setGameData(prevState => {
          return {
            ...prevState,
            homePlayerGamesWon: (prevState.homePlayerGamesWon! += 1),
          };
        });
      }
      case gameData.awayPlayerName: {
        setGameData(prevState => {
          return {
            ...prevState,
            awayPlayerGamesWon: (prevState.awayPlayerGamesWon! += 1),
          };
        });
      }
    }
  };
  return (
    <SafeAreaView style={styles.scoringContainer}>
      <View>
        <View style={styles.gameStateContainer}>
          <View style={styles.homeScoreContainer}>
            <ScoreIndicator
              points={gameData.homePlayerPoints!}
              isServing={gameData.playerServing === gameData.homePlayerName}
              serviceBox={gameData.servingFrom}
            />
          </View>
          <View style={styles.awayScoreContainer}>
            <ScoreIndicator
              points={gameData.awayPlayerPoints!}
              isServing={gameData.playerServing === gameData.awayPlayerName}
              serviceBox={gameData.servingFrom}
            />
          </View>
        </View>
        <View style={styles.scoringControlsContainer}>
          {/* Home Player Controls */}
          <ScoringButtons
            homeButtons={true}
            incrementPoint={() => {
              if (isAmericanScoring()) {
                incrementScoreFor(gameData.homePlayerName!);
                switchServiceBox();
                if (hasWonGame(gameData.homePlayerName!)) {
                  resetScores();
                  incrementGameScore(gameData.homePlayerName!);
                  resetServingFrom();
                }
              }
            }}
            handout={() => {
              switchServingPlayer();
              resetServingFrom();
            }}
            let={() => {
              /*Empty intentionally, point is replayed*/
            }}
            stroke={() => {
              if (isAmericanScoring()) {
                incrementScoreFor(gameData.homePlayerName!);
              }
            }}
            disableButton={!isHomePlayerServing()}
          />
          {/* End Home Player Controls */}
          {/* Away Player Controls */}
          <ScoringButtons
            awayButtons={true}
            incrementPoint={() => {
              incrementScoreFor(gameData.awayPlayerName!);
              switchServiceBox();
              if (hasWonGame(gameData.awayPlayerName!)) {
                resetScores();
                incrementGameScore(gameData.awayPlayerName!);
                resetServingFrom();
              }
            }}
            handout={() => {
              switchServingPlayer();
              resetServingFrom();
            }}
            let={() => {
              /* Replay the point, intentionally empty*/
            }}
            stroke={() => {
              if (isAmericanScoring()) {
                incrementScoreFor(gameData.awayPlayerName!);
                switchServiceBox();
              }
            }}
            disableButton={!isAwayPlayerServing()}
          />
          {/* End Away Player Controls */}
        </View>
      </View>
      <ServicePicker
        isVisible={!serverDefined() || !serviceBoxDefined()}
        homePlayerName={gameData.homePlayerName!}
        awayPlayerName={gameData.awayPlayerName!}
        selectedPlayer={playerName => {
          setGameData(prevState => {
            return {
              ...prevState,
              playerServing: playerName,
            };
          });
        }}
        servingFrom={serviceBox => {
          setGameData(prevState => {
            return {
              ...prevState,
              servingFrom: serviceBox,
            };
          });
        }}
      />
      <View>
        <ResetMatchButton />
      </View>
    </SafeAreaView>
  );
};

export default Scoring;
