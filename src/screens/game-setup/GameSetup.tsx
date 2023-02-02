import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import BaseTouchable from '../../components/BaseTouchable/BaseTouchable';

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
            <BaseTouchable
              buttons={[
                {text: 'American scoring', onPress: () => {}},
                {text: 'English scoring', onPress: () => {}},
              ]}
            />
          </View>
        </View>
        <View>
          <Text>Best of (3 / 5) games</Text>
          <BaseTouchable
            buttons={[
              {
                text: 'Best of 3',
                onPress: () => {},
              },
              {
                text: 'Best of 3',
                onPress: () => {},
              },
            ]}
          />
        </View>
        <View>
          <Text>Points per game</Text>
          <BaseTouchable
            buttons={[
              {text: '15 points', onPress: () => {}},
              {text: '11 points', onPress: () => {}},
              {text: '9 points', onPress: () => {}},
            ]}
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
