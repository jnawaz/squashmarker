import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Scoring.styles';
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';
import ScoringButtons from '../../components/ScoringButtons/ScoringButtons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ResetMatchButton from '../../components/ResetMatchButton/ResetMatchButton';
import ServicePicker from '../../components/ServicePicker/ServicePicker';
import {GameData} from '../../types/game-data/GameData';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';

const Scoring = ({navigation, route}: NativeStackScreenProps<any>) => {
  const [gameData, setGameData] = useState<GameData>(route.params?.gameData);

  console.log(gameData);

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
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
  const homePlayerServing = () => {
    return gameData.playerServing === gameData.homePlayerName;
  };

  const switchService = () => {
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
          <ScoringButtons
            homeButtons={true}
            incrementPoint={() => {
              if (isAmericanScoring() && homePlayerServing()) {
                incrementScoreFor(gameData.homePlayerName!);
              }
            }}
            handout={() => {
              switchService();
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
          />
          <ScoringButtons
            awayButtons={true}
            incrementPoint={() => {
              incrementScoreFor(gameData.awayPlayerName!);
            }}
            handout={() => {
              switchService();
              resetServingFrom();
            }}
            let={() => {
              /* Replay the point, intentionally empty*/
            }}
            stroke={() => {
              if (isAmericanScoring()) {
                incrementScoreFor(gameData.awayPlayerName!);
              }
            }}
          />
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
