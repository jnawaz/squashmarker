import React, { useEffect } from 'react';
import ScoringButton from '../ScoringButtons/ScoringButton';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ScoringToolkit.style';
import {useGameData} from '../../contexts/GameContext';

const ScoringToolKit = () => {
  const navigation = useNavigation();

  const {
    data,
    resetMatch,
    incrementHomePlayerScore,
    incrementAwayPlayerScore,
    switchServiceSide,
  } = useGameData();

  const incrementScore = () => {
    if (data.playerServing === data.homePlayerName) {
      incrementHomePlayerScore();
    } else {
      incrementAwayPlayerScore();
    }
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <ScoringButton
        onTap={() => {
          if (data.playerServing === data.homePlayerName) {
            incrementHomePlayerScore();
          } else {
            incrementAwayPlayerScore();
          }
          switchServiceSide();
        }}
        title={'+1'}
      />
      <ScoringButton
        onTap={() => {
          incrementScore();
          switchServiceSide();
        }}
        title={'Stroke'}
      />
      <ScoringButton onTap={() => {}} title={'Let'} />
      <ScoringButton
        onTap={() => {
          // handout();
        }}
        title={'Handout'}
      />
      <View style={styles.resetButtonMargin}>
        <PrimaryButton
          text={'Reset match'}
          onPress={() => {
            resetMatch();
            navigation.goBack();
          }}
          disabled={false}
        />
      </View>
    </>
  );
};
export default ScoringToolKit;
