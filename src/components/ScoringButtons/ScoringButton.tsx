import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useGameDataContext} from '../../contexts/GameDataContext';
import {ColorDefinitions} from '../../colors/Colors';

export type ScoringButtonProps = {
  title: string;
  onTap: () => void;
};
const ScoringButton = (props: ScoringButtonProps) => {
  const {gameContextData} = useGameDataContext();

  const isServerDetermined = gameContextData!.isServerDetermined;

  return (
    <>
      {isServerDetermined ? (
        <TouchableOpacity
          style={{
            backgroundColor: ColorDefinitions.green500,
            marginHorizontal: 16,
            marginTop: 24,
            height: 48,
            borderRadius: 12,
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          onPress={props.onTap}>
          <Text style={{textAlign: 'center', color: ColorDefinitions.white}}>
            {props.title}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default ScoringButton;
