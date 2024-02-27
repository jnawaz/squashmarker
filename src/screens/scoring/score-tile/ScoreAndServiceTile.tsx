import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ServiceBox} from '../../../types/service-box/ServiceBox';
import {style} from './ScoreAndServiceTile.style';
import {useGameData} from '../../../contexts/GameContext';

export type ScoringTileProps = {
  isHomePlayerTile: boolean;
  isPlayerServing: boolean;
};

const ScoringTile = (props: ScoringTileProps) => {
  const {data} = useGameData();
  useEffect(() => {}, [data]);

  return (
    <View style={style.container}>
      <View style={style.scoreAndServiceContainer}>
        <Text style={style.score}>
          {props.isHomePlayerTile
            ? data.homePlayerPoints
            : data.awayPlayerPoints}
        </Text>
        {props.isPlayerServing ? (
          <View style={style.serviceIndicatorContainer}>
            <Text style={style.serviceBoxIndicatorText}>
              {data.servingFrom === ServiceBox.Left ? 'L' : ''}
            </Text>
            <Text style={style.serviceBoxIndicatorText}>
              {data.servingFrom === ServiceBox.Right ? 'R' : ''}
            </Text>
          </View>
        ) : null}
      </View>
      <Text style={style.playerNameBelowScoreBox}>
        {props.isHomePlayerTile ? data.homePlayerName : data.awayPlayerName}
      </Text>
    </View>
  );
};

export default ScoringTile;
