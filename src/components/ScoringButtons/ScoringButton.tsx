import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useGameDataContext} from '../../contexts/GameDataContext';

export type ScoringButtonProps = {
  title: string;
  onTap: () => void;
};
const ScoringButton = (props: ScoringButtonProps) => {
  const {gameContextData} = useGameDataContext();

  const isServerDetermined = gameContextData?.isServerDetermined;

  return (
    <>
      {isServerDetermined ? (
        <TouchableOpacity onPress={props.onTap}>
          <Text>{props.title}</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default ScoringButton;
