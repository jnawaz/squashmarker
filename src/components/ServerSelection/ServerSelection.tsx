import React from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../colors/Colors';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {
  activeControlFont,
  segmentControlFont,
} from '../SharedStyles/SegmentStyle';

const ServerSelection = () => {
  const {gameContextData} = useGameDataContext();

  const isServerDetermined = gameContextData?.isServerDetermined;

  return !isServerDetermined ? (
    <View
      style={{
        marginHorizontal: 24,
        marginTop: 24,
      }}>
      <SegmentedControl
        tintColor={ColorDefinitions.green400}
        fontStyle={segmentControlFont}
        activeFontStyle={activeControlFont}
        backgroundColor={ColorDefinitions.green500}
        style={{height: 44}}
        values={[
          gameContextData?.homePlayerName!!,
          gameContextData?.awayPlayerName!!,
        ]}
        onValueChange={value => {
          console.log(value);
        }}
      />
      <SegmentedControl
        tintColor={ColorDefinitions.green400}
        fontStyle={segmentControlFont}
        activeFontStyle={activeControlFont}
        backgroundColor={ColorDefinitions.green500}
        style={{height: 44, marginTop: 16}}
        values={['Left Box', 'Right Box']}
        onValueChange={value => {
          console.log(value);
        }}
      />
    </View>
  ) : null;
};

export default ServerSelection;
