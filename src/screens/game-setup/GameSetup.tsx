import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import BaseTouchable from '../../components/BaseTouchable/BaseTouchable';
import {styles} from './GameSetup.style';
import {globalStyle} from '../../globals/styles/Global.style';

const GameSetup = () => {
  const [playerAName, setPlayerAName] = useState('');
  const [playerBName, setPlayerBName] = useState('');

  return (
    <>
      <SafeAreaView style={styles.gameScreenContainer}>
        <View style={styles.gameSetupViewContainer}>
          <Text style={globalStyle.textHeading}>Players</Text>
          <TextInput
            style={styles.playerNameField}
            placeholder={'Player A Name'}
            onChangeText={updatedName => {
              setPlayerAName(updatedName);
            }}
            value={playerAName}
          />
          <TextInput
            style={styles.playerNameField}
            placeholder={'Player B Name'}
            onChangeText={updatedName => {
              setPlayerBName(updatedName);
            }}
            value={playerBName}
          />
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Scoring method</Text>
          <View>
            <BaseTouchable
              buttons={[
                {text: 'American scoring', onPress: () => {}},
                {text: 'English scoring', onPress: () => {}},
              ]}
            />
          </View>
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Best of (3 / 5) games</Text>
          <BaseTouchable
            buttons={[
              {
                text: 'Best of 3',
                onPress: () => {},
              },
              {
                text: 'Best of 5',
                onPress: () => {},
              },
            ]}
          />
        </View>
        <View style={globalStyle.containerPadding}>
          <Text style={globalStyle.textHeading}>Points per game</Text>
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
