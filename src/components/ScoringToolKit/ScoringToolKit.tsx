import React, {useEffect} from 'react';
import ScoringButton from '../ScoringButtons/ScoringButton';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {GameData} from '../../types/game-data/GameData';

const ScoringToolKit = () => {
  const {gameContextData, updateGameContextData} = useGameDataContext();

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
