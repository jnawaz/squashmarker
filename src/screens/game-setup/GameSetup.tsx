import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import ScoringTouchable from '../../components/ScoringTouchable/ScoringTouchable';

const GameSetup = () => {
  const [playerAName, setPlayerAName] = useState('');
  const [playerBName, setPlayerBName] = useState('');

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
            <ScoringTouchable
              onEnglishScoringPressed={() => {
                console.log('english scoring');
              }}
              onAmericanScoringPressed={() => {
                console.log('american scoring');
              }}
            />
          </View>
        </View>
        <View>
          <Text>Best of (3 / 5) games</Text>
          {/* //TODO: build number of games component */}
        </View>
        <View>
          <Text>Points per game</Text>
          {/* //TODO: build points per game component*/}
        </View>
        <View>
          <Button title={'Start game'} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GameSetup;
