import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';
import ScoreAndServiceTile from '../score-tile/score-and-service-tile';
import {useGameDataContext} from '../../../contexts/GameDataContext';

const ScoreContainer = () => {
  const {gameContextData} = useGameDataContext();
  const isHomePlayerServing = () => {
    return gameContextData!.playerServing === gameContextData!.homePlayerName;
  };

  const isAwayPlayerServing = () => {
    return gameContextData!.playerServing === gameContextData!.awayPlayerName;
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: ColorDefinitions.green600,
        marginHorizontal: 16,
        padding: 24,
        borderRadius: 12,
        marginTop: 24,
        gap: 24,
      }}>
      <ScoreAndServiceTile
        isHomePlayerTile={true}
        isPlayerServing={isHomePlayerServing()}
      />
      <ScoreAndServiceTile
        isHomePlayerTile={false}
        isPlayerServing={isAwayPlayerServing()}
      />
    </View>
  );
};

export default ScoreContainer;
