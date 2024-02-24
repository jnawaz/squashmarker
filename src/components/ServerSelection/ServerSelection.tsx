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
  const {data, setServer, setServingFrom} = useGameData();

  const isServerDetermined = data.playerServing !== undefined;
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
            setServer(value);
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
            if (value === 'Left Box') {
              setServingFrom(ServiceBox.Left);
            } else {
              setServingFrom(ServiceBox.Right);
            }
          }}
        />
      ) : null}
    </View>
  );
};

export default ServerSelection;
