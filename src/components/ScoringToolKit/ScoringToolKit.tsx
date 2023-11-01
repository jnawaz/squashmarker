import React, { useEffect } from "react";
import ScoringButton from "../ScoringButtons/ScoringButton";
import { useGameDataContext } from "../../contexts/GameDataContext";
import { ScoringMethod } from "../../types/scoring/ScoringMethod";
import { GameData } from "../../types/game-data/GameData";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { View } from "react-native";
import { ServiceBox } from "../../types/service-box/ServiceBox";
import { PointsPerGame } from "../../types/points-per-game/PointsPerGame";
import { BestOfGames } from "../../types/games/BestOfGames";

const ScoringToolKit = () => {
  const {gameContextData, updateGameContextData} = useGameDataContext();

  const hasWonGame = () => {
    switch (gameContextData!.pointsPerGame) {
      case PointsPerGame.PointsTo9: {
        //TODO: implement decider
      }
      case PointsPerGame.PointsTo11: {
        //TODO: implement decider
      }

      case PointsPerGame.PointsTo15: {
        //TODO: implement decider
      }
    }
  };

  const hasWonMatch = () => {
    switch (gameContextData!.bestOfGames) {
      case BestOfGames.BestOf3: {
        if (gameContextData!.homePlayerGamesWon == 2) {
          console.log(`${gameContextData!.homePlayerName} has won`);
        } else if (gameContextData!.awayPlayerGamesWon == 2) {
          console.log(`${gameContextData!.awayPlayerName} has won`);
        }
      }
      case BestOfGames.BestOf5: {
        if (gameContextData!.homePlayerGamesWon == 3) {
          console.log(`${gameContextData!.homePlayerName} has won`);
        } else if (gameContextData!.awayPlayerGamesWon == 3) {
          console.log(`${gameContextData!.awayPlayerName} has won`);
        }
      }
    }
  };

  const incrementScore = () => {
    updateGameContextData((gameContextData: GameData) => {
      if (gameContextData!.playerServing === gameContextData.homePlayerName) {
        return {
          ...gameContextData,
          homePlayerPoints: (gameContextData.homePlayerPoints! += 1),
        };
      } else {
        return {
          ...gameContextData,
          awayPlayerPoints: (gameContextData.awayPlayerPoints! += 1),
        };
      }
    });

    hasWonGame();
    hasWonMatch();
  };
  function isAmericanScoring() {
    return gameContextData!.scoringSystem === ScoringMethod.AmericanScoring;
  }

  const handout = () => {
    updateGameContextData(gameData => {
      return {
        ...gameData,
        playerServing:
          gameData.playerServing === gameData.homePlayerName
            ? gameData.awayPlayerName
            : gameData.homePlayerName,
        servingFrom: undefined,
      };
    });
  };

  useEffect(() => {}, [gameContextData]);

  const switchServiceSide = () => {
    updateGameContextData(gameData => {
      return {
        ...gameData,
        servingFrom:
          gameData.servingFrom === ServiceBox.Left
            ? ServiceBox.Right
            : ServiceBox.Left,
      };
    });
  };

  const switchServer = () => {
    updateGameContextData(gameData => {
      return {
        ...gameData,
        playerServing:
          gameData.playerServing === gameData.homePlayerName
            ? gameData.awayPlayerName
            : gameData.homePlayerName,
      };
    });
  };

  return (
    <>
      <ScoringButton
        onTap={() => {
          if (isAmericanScoring()) {
            incrementScore();
            switchServiceSide();
          } else {
            handout();
          }
        }}
        title={'+1'}
      />
      <ScoringButton
        onTap={() => {
          incrementScore();
          switchServiceSide();
        }}
        title={'Stroke'}
      />
      <ScoringButton onTap={() => {}} title={'Let'} />
      <ScoringButton
        onTap={() => {
          handout();
        }}
        title={'Handout'}
      />
      <View style={{marginHorizontal: 16}}>
        <PrimaryButton
          text={'Reset match'}
          onPress={() => {}}
          disabled={false}
        />
      </View>
    </>
  );
};

export default ScoringToolKit;
