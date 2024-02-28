import 'react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import ScoringTile from '../score-tile/ScoreAndServiceTile';
import {useGameData} from '../../../contexts/GameContext';
import {styles} from './ScoreContainer.style';

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
    <View style={styles.container}>
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
