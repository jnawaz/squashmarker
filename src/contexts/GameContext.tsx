import React, {ReactNode, useContext} from 'react';
import {FC, createContext, useState} from 'react';
import {BestOfGames} from '../types/games/BestOfGames';
import {PointsPerGame} from '../types/points-per-game/PointsPerGame';
import {ScoringMethod} from '../types/scoring/ScoringMethod';
import {ServiceBox} from '../types/service-box/ServiceBox';
import Scoring from '../screens/scoring/Scoring';

interface GameData {
  homePlayerName: string | undefined;
  awayPlayerName: string | undefined;
  homePlayerGamesWon: number | undefined;
  awayPlayerGamesWon: number | undefined;
  currentGame: number | undefined;
  homePlayerPoints: number | undefined;
  awayPlayerPoints: number | undefined;
  bestOfGames: BestOfGames | undefined;
  pointsPerGame: PointsPerGame | undefined;
  scoringSystem: ScoringMethod | undefined;
  servingFrom: ServiceBox | undefined;
  playerServing: string | undefined;
  isServerDetermined: boolean;
}

interface GameDataContextType {
  data: GameData;
  setHomePlayerName: (name: string) => void;
  setAwayPlayerName: (name: string) => void;
  setScoringMethod: (scoringMethod: ScoringMethod) => void;
  setBestOfGames: (bestOfGames: BestOfGames) => void;
  setPointsPerGame: (pointsPerGame: PointsPerGame) => void;
  incrementHomePlayerScore: () => void;
  incrementAwayPlayerScore: () => void;
  incrementHomePlayerGamesWon: () => void;
  incrementAwayPlayerGamesWon: () => void;
  handout: () => void;
  switchServiceSide: () => void;
  resetMatch: () => void;
}

export const initialData: GameData = {
  homePlayerName: undefined,
  awayPlayerName: undefined,
  homePlayerGamesWon: 0,
  awayPlayerGamesWon: 0,
  currentGame: 1,
  homePlayerPoints: 0,
  awayPlayerPoints: 0,
  bestOfGames: BestOfGames.BestOf3,
  pointsPerGame: PointsPerGame.PointsTo9,
  scoringSystem: ScoringMethod.EnglishScoring,
  servingFrom: undefined,
  playerServing: undefined,
  isServerDetermined: false,
};

export const GameDataContext = createContext<GameDataContextType | null>(null);

interface GameDataProviderProps {
  children: ReactNode;
}

export const GameDataProvider: React.FC<GameDataProviderProps> = ({
  children,
}) => {
  const [gameData, setGameData] = useState<GameData>(initialData);

  const setHomePlayerName = (name: string) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      homePlayerName: name,
    }));
  };

  const setAwayPlayerName = (name: string) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      awayPlayerName: name,
    }));
  };

  const setScoringMethod = (scoringMethod: ScoringMethod) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      scoringSystem: scoringMethod,
    }));
  };

  const setBestOfGames = (bestOfGames: BestOfGames) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      bestOfGames: bestOfGames,
    }));
  };

  const setPointsPerGame = (pointsPerGame: PointsPerGame) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      pointsPerGame: pointsPerGame,
    }));
  };

  const incrementHomePlayerScore = () => {
    setGameData({
      ...gameData,
      homePlayerPoints: gameData.homePlayerPoints! + 1,
    });
  };

  const incrementAwayPlayerScore = () => {
    setGameData({
      ...gameData,
      awayPlayerPoints: gameData.awayPlayerPoints! + 1,
    });
  };

  const incrementHomePlayerGamesWon = () => {
    setGameData({
      ...gameData,
      homePlayerGamesWon: gameData.homePlayerGamesWon! + 1,
    });
  };

  const incrementAwayPlayerGamesWon = () => {
    setGameData({
      ...gameData,
      awayPlayerGamesWon: gameData.awayPlayerGamesWon! + 1,
    });
  };

  const handout = () => {
    setGameData({
      ...gameData,
      playerServing:
        gameData.playerServing === gameData.homePlayerName
          ? gameData.awayPlayerName
          : gameData.homePlayerName,
      servingFrom: undefined,
    });
  };

  const resetMatch = () => {
    setGameData(initialData);
  };

  const switchServiceSide = () => {
    setGameData({
      ...gameData,
      servingFrom:
        gameData.servingFrom === ServiceBox.Left
          ? ServiceBox.Right
          : ServiceBox.Left,
    });
  };

  return (
    <GameDataContext.Provider
      value={{
        data: gameData,
        setHomePlayerName,
        setAwayPlayerName,
        setScoringMethod,
        setBestOfGames,
        setPointsPerGame,
        incrementHomePlayerScore,
        incrementAwayPlayerScore,
        incrementHomePlayerGamesWon,
        incrementAwayPlayerGamesWon,
        handout,
        switchServiceSide,
        resetMatch,
      }}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useGameData = (): GameDataContextType => {
  const context = useContext(GameDataContext);
  if (!context) {
    throw new Error('useGameData must be used within a GameDataProvider');
  }
  return context;
};
