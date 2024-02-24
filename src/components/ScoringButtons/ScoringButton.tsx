import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ColorDefinitions} from '../../colors/Colors';
import {useGameData} from '../../contexts/GameContext';

export type ScoringButtonProps = {
  title: string;
  onTap: () => void;
};
const ScoringButton = (props: ScoringButtonProps) => {
  // const {gameContextData} = useGameDataContext();

  const {data} = useGameData();

  const isServerDetermined = data.isServerDetermined;
  const isServiceBoxDetermined = data.servingFrom !== undefined;

  useEffect(() => {}, [data]);

  return (
    <>
      {isServerDetermined && isServiceBoxDetermined ? (
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
