import React, {useEffect} from 'react';
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
  const isServiceBoxDetermined = gameContextData?.servingFrom !== undefined;

  const updateServerDetermined = () => {
    if (gameContextData!.servingFrom && gameContextData!.playerServing) {
      updateGameContextData(gameData => {
        return {
          ...gameData,
          isServerDetermined: true,
        };
      });
    }
  };

  useEffect(() => {}, [gameContextData, isServiceBoxDetermined]);

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
          values={[
            gameContextData!.homePlayerName!!,
            gameContextData!.awayPlayerName!!,
          ]}
          onValueChange={value => {
            updateGameContextData(gameData => {
              return {
                ...gameData,
                playerServing: value,
                isServerDetermined: true,
              };
            });
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
              servingFromBox = ServiceBox.Left;
            } else {
              servingFromBox = ServiceBox.Right;
            }
            updateGameContextData(gameData => {
              return {
                ...gameData,
                servingFrom: servingFromBox,
              };
            });
            updateServerDetermined();
          }}
        />
      ) : null}
    </View>
  );
};

export default ServerSelection;
