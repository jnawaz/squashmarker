import React, {ReactNode, useContext, valueOf} from 'react';
import {createContext, useState} from 'react';
import {BestOfGames} from '../types/games/BestOfGames';
import {PointsPerGame} from '../types/points-per-game/PointsPerGame';
import {ScoringMethod} from '../types/scoring/ScoringMethod';
import {ServiceBox} from '../types/service-box/ServiceBox';

interface GameData {
  homePlayerName: string | undefined;
  awayPlayerName: string | undefined;
  homePlayerGamesWon: number;
  awayPlayerGamesWon: number;
  currentGame: number;
  homePlayerPoints: number;
  awayPlayerPoints: number;
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
  setServer: (name: string) => void;
  setServingFrom: (serviceBox: ServiceBox) => void;
  incrementHomePlayerScore: () => void;
  incrementAwayPlayerScore: () => void;
  incrementHomePlayerGamesWon: () => void;
  incrementAwayPlayerGamesWon: () => void;
  incrementGamesWon: () => void;
  handout: () => void;
  hasWonGame: () => boolean;
  switchServiceSide: () => void;
  resetScores: () => void;
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

  const setServer = (name: string) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      playerServing: name,
    }));
  };

  const setServingFrom = (serviceBox: ServiceBox) => {
    setGameData(prevGameData => ({
      ...prevGameData,
      servingFrom: serviceBox,
    }));
  };

  const incrementHomePlayerScore = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      homePlayerPoints: (prevGameData.homePlayerPoints += 1),
    }));
  };

  const incrementAwayPlayerScore = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      awayPlayerPoints: (prevGameData.awayPlayerPoints += 1),
    }));
  };

  const incrementHomePlayerGamesWon = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      homePlayerGamesWon: prevGameData.homePlayerGamesWon + 1,
      servingFrom: undefined,
    }));
  };

  const incrementAwayPlayerGamesWon = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      awayPlayerGamesWon: prevGameData.awayPlayerGamesWon + 1,
      servingFrom: undefined,
    }));
  };

  const handout = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      playerServing:
        prevGameData.playerServing === prevGameData.homePlayerName
          ? prevGameData.awayPlayerName
          : prevGameData.homePlayerName,
      servingFrom: undefined,
    }));
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

  const resetScores = () => {
    setGameData(prevGameData => ({
      ...prevGameData,
      homePlayerPoints: 0,
      awayPlayerPoints: 0,
    }));
  };

  const hasWonGame = (): boolean => {
    switch (gameData.scoringSystem) {
      case ScoringMethod.AmericanScoring:
        switch (gameData.pointsPerGame) {
          case PointsPerGame.PointsTo11:
            if (
              gameData.awayPlayerPoints >= 11 ||
              gameData.homePlayerPoints >= 11
            ) {
              return true;
            }
            break;
          case PointsPerGame.PointsTo15:
            if (
              gameData.homePlayerPoints >= 15 ||
              gameData.awayPlayerPoints >= 15
            ) {
              return true;
            }
        }
        break;
      case ScoringMethod.EnglishScoring:
        break;
    }
    return false;
  };

  const incrementGamesWon = () => {
    if (gameData.playerServing === gameData.homePlayerName) {
      incrementHomePlayerGamesWon();
    } else {
      incrementAwayPlayerGamesWon();
    }
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
        setServer,
        setServingFrom,
        incrementHomePlayerScore,
        incrementAwayPlayerScore,
        incrementHomePlayerGamesWon,
        incrementAwayPlayerGamesWon,
        handout,
        switchServiceSide,
        hasWonGame,
        incrementGamesWon,
        resetScores,
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
