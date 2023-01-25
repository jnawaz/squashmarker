import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AmericanScoring, EnglishScoring} from '../../types/scoring/ScoringType';

const GameSetup = () => {
  const [playerAName, setPlayerAName] = useState('');
  const [playerBName, setPlayerBName] = useState('');

  const americanScoring: AmericanScoring = true;
  const englishScoring: EnglishScoring = false;
  const [scoringMethod, setScoringMethod] = useState<
    AmericanScoring | EnglishScoring
  >(americanScoring);

  const [bestOfGames, setBestOfGames] = useState(false);
  const [pointsPerGame, setPointsPerGame] = useState(true);

  return (
    <>
      <SafeAreaView>
        <View>
          <TextInput
            placeholder={'Player A Name'}
            onChangeText={updatedName => {
              setPlayerAName(updatedName);
            }}
            value={playerAName}
          />
          <TextInput
            placeholder={'Player B Name'}
            onChangeText={updatedName => {
              setPlayerBName(updatedName);
            }}
            value={playerBName}
          />
        </View>
        <View>
          <Text>Scoring method</Text>
          <View>
            <Switch
              value={scoringMethod}
              onValueChange={newValue => {
                if (newValue === americanScoring) {
                  console.log(newValue);
                  setScoringMethod(americanScoring);
                } else {
                  setScoringMethod(englishScoring);
                }
              }}
            />
          </View>
        </View>
        <View>
          <Text>Best of (3 / 5) games</Text>
          <Switch
            value={bestOfGames}
            onValueChange={updatedBestOfGames => {
              setBestOfGames(updatedBestOfGames);
            }}
          />
        </View>
        <View>
          <Text>Points per game</Text>
          <Switch
            value={pointsPerGame}
            onValueChange={updatedPointsPerGame => {
              setPointsPerGame(updatedPointsPerGame);
            }}
          />
        </View>
        <View>
          <Button title={'Start game'} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GameSetup;
