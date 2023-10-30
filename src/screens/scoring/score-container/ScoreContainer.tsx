import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../../colors/Colors';
import ScoreAndServiceTile from '../score-tile/score-and-service-tile';

const ScoreContainer = () => {
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
      <ScoreAndServiceTile isHomePlayerTile={true} />
      <ScoreAndServiceTile isHomePlayerTile={false} />
    </View>
  );
};

export default ScoreContainer;
