import React from 'react';
import ScoringButton from '../ScoringButtons/ScoringButton';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {GameData} from '../../types/game-data/GameData';

const ScoringToolKit = () => {
  const {gameContextData, updateGameContextData} = useGameDataContext();

  function incrementScore() {
    gameContextData!.playerServing === gameContextData!.homePlayerName
      ? (gameContextData!.homePlayerPoints! += 1)
      : (gameContextData!.awayPlayerPoints! += 1);

    updateGameContextData((gameContextData: GameData) => {
      return {
        ...gameContextData,
        homePlayerPoints:
          gameContextData.playerServing === gameContextData.homePlayerName
            ? (gameContextData.homePlayerPoints! += 1)
            : gameContextData.homePlayerPoints!,
        awayPlayerPoints:
          gameContextData.playerServing === gameContextData.awayPlayerPoints
            ? (gameContextData.awayPlayerPoints! += 1)
            : gameContextData.awayPlayerPoints!,
      };
    });
  }

  function isAmericanScoring() {
    return gameContextData!.scoringSystem === ScoringMethod.AmericanScoring;
  }

  function handout() {
    if (gameContextData!.playerServing === gameContextData!.homePlayerName) {
      gameContextData!.playerServing = gameContextData!.awayPlayerName;
    } else {
      gameContextData!.playerServing = gameContextData!.homePlayerName;
    }
    updateGameContextData((gameContextData: GameData) => {
      return {
        ...gameContextData,
        playerServing:
          gameContextData.playerServing === gameContextData.homePlayerName
            ? gameContextData.awayPlayerName
            : gameContextData.homePlayerName,
      };
    });
  }

  return (
    <>
      <ScoringButton
        onTap={() => {
          if (isAmericanScoring()) {
            incrementScore();
          } else {
          }
        }}
        title={'+1'}
      />
      <ScoringButton onTap={() => {}} title={'Stroke'} />
      <ScoringButton onTap={() => {}} title={'Let'} />
      <ScoringButton
        onTap={() => {
          handout();
        }}
        title={'Handout'}
      />
    </>
  );
};

export default ScoringToolKit;
