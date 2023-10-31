import React from 'react';
import {View} from 'react-native';
import {ColorDefinitions} from '../../colors/Colors';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {
  activeControlFont,
  segmentControlFont,
} from '../SharedStyles/SegmentStyle';
import {ServiceBox} from '../../types/service-box/ServiceBox';

const ServerSelection = () => {
  const {gameContextData, updateGameContextData} = useGameDataContext();

  const isServerDetermined = gameContextData!.isServerDetermined;

  function updateServerDetermined() {
    if (gameContextData!.servingFrom && gameContextData!.playerServing) {
      gameContextData!.isServerDetermined = true;
      updateGameContextData(gameContextData!);
    }
  }

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
          gameContextData!.homePlayerName!!,
          gameContextData!.awayPlayerName!!,
        ]}
        onValueChange={value => {
          gameContextData!.playerServing = value;
          updateGameContextData(gameContextData!);
          updateServerDetermined();
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
          if (value === 'Left Box') {
            gameContextData!.servingFrom = ServiceBox.Left;
          } else {
            gameContextData!.servingFrom = ServiceBox.Right;
          }
          updateGameContextData(gameContextData!);
          updateServerDetermined();
        }}
      />
    </View>
  ) : null;
};

export default ServerSelection;
