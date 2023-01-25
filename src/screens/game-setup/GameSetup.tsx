import React, {useState} from 'react';
import { Button, SafeAreaView, Switch, Text, TextInput, View } from "react-native";

const GameSetup = () => {
  const [playerAName, setPlayerAName] = useState('');
  const [playerBName, setPlayerBName] = useState('');
  const [scoringMethod, setScoringMethod] = useState(false);
  const [bestOfGames, setBestOfGames] = useState(false);
  const [pointsPerGame, setPointsPerGame] = useState(false);

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
                setScoringMethod(newValue);
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
