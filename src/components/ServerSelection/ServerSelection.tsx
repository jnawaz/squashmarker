import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../colors/Colors';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {
  activeControlFont,
  segmentControlFont,
} from '../SharedStyles/SegmentStyle';
import {ServiceBox} from '../../types/service-box/ServiceBox';
import {useGameData} from '../../contexts/GameContext';

const ServerSelection = () => {
  const {data} = useGameData();

  const isServerDetermined = data.isServerDetermined;
  const isServiceBoxDetermined = data.servingFrom !== undefined;

  const updateServerDetermined = () => {
    if (data.servingFrom && data.playerServing) {
    }
  };

  useEffect(() => {}, [data, isServiceBoxDetermined]);

  return (
    <View
      style={{
        marginHorizontal: 24,
        marginTop: 24,
      }}>
      {!isServerDetermined ? (
        <SegmentedControl
          tintColor={ColorDefinitions.green400}
          fontStyle={segmentControlFont}
          activeFontStyle={activeControlFont}
          backgroundColor={ColorDefinitions.green500}
          style={{height: 44}}
          values={[data.homePlayerName, data.awayPlayerName]}
          onValueChange={value => {
            updateServerDetermined();
          }}
        />
      ) : null}

      {!isServiceBoxDetermined ? (
        <SegmentedControl
          tintColor={ColorDefinitions.green400}
          fontStyle={segmentControlFont}
          activeFontStyle={activeControlFont}
          backgroundColor={ColorDefinitions.green500}
          style={{height: 44, marginTop: 16}}
          values={['Left Box', 'Right Box']}
          onValueChange={value => {
            var servingFromBox: ServiceBox;
            if (value === 'Left Box') {
              // servingFromBox = ServiceBox.Left;
            } else {
              // servingFromBox = ServiceBox.Right;
            }
            updateServerDetermined();
          }}
        />
      ) : null}
    </View>
  );
};

export default ServerSelection;
