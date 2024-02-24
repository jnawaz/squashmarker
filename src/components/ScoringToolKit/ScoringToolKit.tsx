import React from 'react';
import ScoringButton from '../ScoringButtons/ScoringButton';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {View} from 'react-native';
import {PointsPerGame} from '../../types/points-per-game/PointsPerGame';
import {BestOfGames} from '../../types/games/BestOfGames';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ScoringToolkit.style';
import {useGameData} from '../../contexts/GameContext';

const ScoringToolKit = () => {
  const navigation = useNavigation();

  const {data} = useGameData();

  const hasWonGame = () => {
    switch (data.pointsPerGame) {
      case PointsPerGame.PointsTo9: {
        if (data.homePlayerPoints === 8 && data.awayPlayerPoints === 8) {
          //TODO: implement decider
        } else if (data.homePlayerPoints === 9) {
        } else if (data.awayPlayerPoints === 9) {
        }
        break;
      }
      case PointsPerGame.PointsTo11: {
        //TODO: implement decider
        if (data.homePlayerPoints === 10 && data.awayPlayerPoints === 10) {
          //TODO: implement decider
        } else if (data.homePlayerPoints === PointsPerGame.PointsTo11) {
        } else if (data.awayPlayerPoints === PointsPerGame.PointsTo11) {
        }
        break;
      }

      case PointsPerGame.PointsTo15: {
        if (data.homePlayerPoints === 14 && data.awayPlayerPoints === 14) {
          //TODO: implement decider
        } else if (data.homePlayerPoints === PointsPerGame.PointsTo15) {
        } else if (data.awayPlayerPoints === PointsPerGame.PointsTo15) {
        }
        break;
      }
    }
  };

  const hasWonMatch = () => {
    switch (data.bestOfGames) {
      case BestOfGames.BestOf3: {
        if (data.homePlayerGamesWon === 2) {
          console.log(`${data.homePlayerName} has won`);
        } else if (data.awayPlayerGamesWon === 2) {
          console.log(`${data.awayPlayerName} has won`);
        }
        break;
      }
      case BestOfGames.BestOf5: {
        if (data.homePlayerGamesWon === 3) {
          console.log(`${data.homePlayerName} has won`);
        } else if (data.awayPlayerGamesWon === 3) {
          console.log(`${data.awayPlayerName} has won`);
        }
        break;
      }
    }
  };

  function isAmericanScoring() {
    return data.scoringSystem === ScoringMethod.AmericanScoring;
  }

  return (
    <>
      <ScoringButton
        onTap={() => {
          if (isAmericanScoring()) {
            incrementScore();
            switchServiceSide();
          } else {
            handout();
          }
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
          handout();
        }}
        title={'Handout'}
      />
      <View style={styles.resetButtonMargin}>
        <PrimaryButton
          text={'Reset match'}
          onPress={() => {
            navigation.goBack();
          }}
          disabled={false}
        />
      </View>
    </>
  );
};
export default ScoringToolKit;
