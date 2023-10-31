import {useGameDataContext} from '../../../contexts/GameDataContext';
import React from 'react';
import {Text, View} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';
import {ServiceBox} from '../../../types/service-box/ServiceBox';

export type ScoringTileProps = {
  isHomePlayerTile: boolean;
  isPlayerServing: boolean;
};

const ScoringTile = (props: ScoringTileProps) => {
  const {gameContextData} = useGameDataContext();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: ColorDefinitions.green400,
          borderRadius: 12,
          marginTop: 8,
        }}>
        <Text style={{textAlign: 'center', paddingVertical: 24}}>
          {props.isHomePlayerTile
            ? gameContextData?.homePlayerPoints
            : gameContextData?.awayPlayerPoints}
        </Text>
        {props.isPlayerServing ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {gameContextData!.servingFrom === ServiceBox.Left ? (
              <Text
                style={{
                  marginHorizontal: 24,
                  marginBottom: 16,
                }}>
                L
              </Text>
            ) : null}
            {gameContextData!.servingFrom === ServiceBox.Right ? (
              <Text
                style={{
                  marginHorizontal: 24,
                  marginBottom: 16,
                }}>
                R
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
      <Text
        style={{
          marginTop: 16,
          textAlign: 'center',
          color: ColorDefinitions.white,
        }}>
        {props.isHomePlayerTile
          ? gameContextData?.homePlayerName
          : gameContextData?.awayPlayerName}
      </Text>
    </View>
  );
};

export default ScoringTile;
