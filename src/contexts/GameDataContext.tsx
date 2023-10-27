import React, {createContext, ReactNode, useContext, useState} from 'react';
import {GameData} from '../types/game-data/GameData';

interface GameDataContextType {
  gameContextData: GameData | null;
  updateGameContextData: (gameData: GameData) => void;
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
        updateGameContextData,
      }}>
      {children}
    </GameDataContext.Provider>
  );
};
