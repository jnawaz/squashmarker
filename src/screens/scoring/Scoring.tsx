import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {ServiceBox} from '../../types/service-box/ServiceBox';
import ScoreContainer from './score-container/ScoreContainer';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {ColorDefinitions} from '../../colors/Colors';
import {useGameDataContext} from '../../contexts/GameDataContext';

const Scoring = ({navigation}: NativeStackScreenProps<any>) => {
  // const [gameData, setGameData] = useState<GameData>(route.params?.gameData);

  const {gameContextData, updateGameContextData} = useGameDataContext();

  useEffect(() => {
    const scoringElement = () => {
      return (
        <Text>
          {gameContextData?.homePlayerGamesWon ?? 0} -{' '}
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

  const isAmericanScoring = () => {
    return gameContextData?.scoringSystem === ScoringMethod.AmericanScoring;
  };
  const isEnglishScoring = () => {
    return gameContextData?.scoringSystem === ScoringMethod.EnglishScoring;
  };
  const incrementScoreFor = (playerName: string) => {
    if (serverDefined()) {
      if (playerName === gameContextData?.homePlayerName) {
        // setGameData(prevState => {
        //   return {
        //     ...prevState,
        //     homePlayerPoints: (prevState.homePlayerPoints! += 1),
        //   };
        // });
      } else {
        // setGameData(prevState => {
        //   return {
        //     ...prevState,
        //     awayPlayerPoints: (prevState.awayPlayerPoints! += 1),
        //   };
        // });
      }
    }
  };
  const isHomePlayerServing = () => {
    return gameContextData?.playerServing === gameContextData?.homePlayerName;
  };

  const switchServingPlayer = () => {
    if (gameContextData?.playerServing === gameContextData?.homePlayerName) {
      // setGameData(prevState => {
      //   return {
      //     ...prevState,
      //     playerServing: prevState.awayPlayerName,
      //   };
      // });
    } else {
      // setGameData(prevState => {
      //   return {
      //     ...prevState,
      //     playerServing: prevState.homePlayerName,
      //   };
      // });
    }
  };
  const serverDefined = () => {
    return gameContextData?.playerServing !== undefined;
  };

  const serviceBoxDefined = () => {
    return gameContextData?.servingFrom !== undefined;
  };

  const resetServingFrom = () => {
    // setGameData(prevState => {
    //   return {
    //     ...prevState,
    //     servingFrom: undefined,
    //   };
    // });
  };

  const switchServiceBox = () => {
    if (gameContextData?.servingFrom === ServiceBox.Left) {
      // setGameData(prevState => {
      //   return {
      //     ...prevState,
      //     servingFrom: ServiceBox.Right,
      //   };
      // });
    } else if (gameContextData?.servingFrom === ServiceBox.Right) {
      // setGameData(prevState => {
      //   return {
      //     ...prevState,
      //     servingFrom: ServiceBox.Left,
      //   };
      // });
    }
  };

  const isAwayPlayerServing = () => {
    return gameContextData?.playerServing === gameContextData?.awayPlayerName;
  };

  const resetScores = () => {
    // setGameData(prevState => {
    //   return {
    //     ...prevState,
    //     homePlayerPoints: 0,
    //     awayPlayerPoints: 0,
    //   };
    // });
  };

  const hasWonGame = (playerName: string) => {
    switch (playerName) {
      case gameContextData?.homePlayerName: {
        return (
          gameContextData?.homePlayerPoints ===
          gameContextData?.pointsPerGame! - 1
        );
      }
      case gameContextData?.awayPlayerName: {
        return (
          gameContextData?.awayPlayerPoints ===
          gameContextData?.pointsPerGame! - 1
        );
      }
    }
  };

  const hasWonMatch = (playerName: string) => {
    switch (playerName) {
      case gameContextData?.homePlayerName: {
        return (
          gameContextData?.homePlayerGamesWon ===
          gameContextData?.bestOfGames! - 1
        );
      }

      case gameContextData?.awayPlayerName: {
        return (
          gameContextData?.awayPlayerGamesWon ===
          gameContextData?.bestOfGames! - 1
        );
      }
    }
  };

  const incrementGameScore = (playerName: string) => {
    switch (playerName) {
      case gameContextData?.homePlayerName: {
        // setgameDataContext(prevState => {
        //   return {
        //     ...prevState,
        //     homePlayerGamesWon: (prevState.homePlayerGamesWon! += 1),
        //   };
        // });
        break;
      }
      case gameContextData?.awayPlayerName: {
        // setGameData(prevState => {
        //   return {
        //     ...prevState,
        //     awayPlayerGamesWon: (prevState.awayPlayerGamesWon! += 1),
        //   };
        // });
        break;
      }
    }
  };
  //TODO: handle tied score logic
  return (
    <SafeAreaView style={[GlobalStyles.screenBackground]}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 24,
            color: ColorDefinitions.white,
          }}>
          34m: 20s
        </Text>
        <ScoreContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scoring;
