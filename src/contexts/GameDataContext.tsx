import React, {createContext, ReactNode, useContext, useState} from 'react';
import {GameData} from '../types/game-data/GameData';
import {BestOfGames} from '../types/games/BestOfGames';
import {ScoringMethod} from '../types/scoring/ScoringMethod';
import {ServiceBox} from '../types/service-box/ServiceBox';
import {PointsPerGame} from '../types/points-per-game/PointsPerGame';

interface GameDataContextType {
  gameContextData: GameData | null;
  updateGameContextData: (
    gameData: (gameContextData: GameData) => {
      awayPlayerPoints: number | undefined;
      homePlayerGamesWon: number | undefined;
      homePlayerName: string | undefined;
      awayPlayerName: string | undefined;
      isServerDetermined: boolean;
      playerServing: string | undefined;
      awayPlayerGamesWon: number | undefined;
      currentGame: number | undefined;
      bestOfGames: BestOfGames | undefined;
      homePlayerPoints: number | undefined;
      scoringSystem: ScoringMethod | undefined;
      servingFrom: ServiceBox | undefined;
      pointsPerGame: PointsPerGame | undefined;
    },
  ) => void;
}

const GameDataContext = createContext<GameDataContextType | null>(null);

export const useGameDataContext = () => {
  const context = useContext(GameDataContext);
  if (!context) {
    throw new Error(
      'useGameDataContext must be used within a GameDataProvider',
    );
  }
  return context;
};

interface MyContextProviderProps {
  children: ReactNode;
}

export const GameDataContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [gameContextData, setGameData] = useState<GameData | null>(null);
  const updateGameContextData = (newData: GameData) => {
    console.log(`newGameData: ${newData}`);
    setGameData(newData);
  };

  return (
    <GameDataContext.Provider
      value={{
        gameContextData,
        // @ts-ignore
        updateGameContextData,
      }}>
      {children}
    </GameDataContext.Provider>
  );
};
