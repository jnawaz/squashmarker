import {useGameDataContext} from '../../../contexts/GameDataContext';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';
import {ServiceBox} from '../../../types/service-box/ServiceBox';
import {style} from './ScoreAndServiceTile.style';

export type ScoringTileProps = {
  isHomePlayerTile: boolean;
  isPlayerServing: boolean;
};

const ScoringTile = (props: ScoringTileProps) => {
  const {gameContextData} = useGameDataContext();

  useEffect(() => {}, [gameContextData]);

  return (
    <View style={style.container}>
      <View style={style.scoreAndServiceContainer}>
        <Text
          style={{
            textAlign: 'center',
            paddingVertical: 24,
            color: ColorDefinitions.white,
            fontFamily: 'TitilliumWeb-SemiBold',
            fontSize: 24,
          }}>
          {props.isHomePlayerTile
            ? gameContextData!.homePlayerPoints
            : gameContextData!.awayPlayerPoints}
        </Text>
        {props.isPlayerServing ? (
          <View style={style.serviceIndicatorContainer}>
            <Text style={style.serviceBoxIndicatorText}>
              {gameContextData!.servingFrom === ServiceBox.Left ? 'L' : ''}
            </Text>
            <Text style={style.serviceBoxIndicatorText}>
              {gameContextData!.servingFrom === ServiceBox.Right ? 'R' : ''}
            </Text>
          </View>
        ) : null}
      </View>
      <Text style={style.playerNameBelowScoreBox}>
        {props.isHomePlayerTile
          ? gameContextData!.homePlayerName
          : gameContextData!.awayPlayerName}
      </Text>
    </View>
  );
};

export default ScoringTile;
