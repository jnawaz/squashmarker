import 'react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';
import ScoringTile from '../score-tile/ScoreAndServiceTile';
import {useGameData} from '../../../contexts/GameContext';

const ScoreContainer = () => {
  const {data} = useGameData();

  const isHomePlayerServing = () => {
    return data.playerServing === data.homePlayerName;
  };

  const isAwayPlayerServing = () => {
    return data.playerServing === data.awayPlayerName;
  };

  useEffect(() => {}, [data]);

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
      <ScoringTile
        isHomePlayerTile={true}
        isPlayerServing={isHomePlayerServing()}
      />
      <ScoringTile
        isHomePlayerTile={false}
        isPlayerServing={isAwayPlayerServing()}
      />
    </View>
  );
};

export default ScoreContainer;
