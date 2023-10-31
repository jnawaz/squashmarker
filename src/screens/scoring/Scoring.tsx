import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScoringMethod} from '../../types/scoring/ScoringMethod';
import {ServiceBox} from '../../types/service-box/ServiceBox';
import ScoreContainer from './score-container/ScoreContainer';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {ColorDefinitions} from '../../colors/Colors';
import {useGameDataContext} from '../../contexts/GameDataContext';
import ServerSelection from '../../components/ServerSelection/ServerSelection';
import ScoringToolKit from '../../components/ScoringToolKit/ScoringToolKit';

const Scoring = ({navigation}: NativeStackScreenProps<any>) => {
  // const [gameData, setGameData] = useState<GameData>(route.params?.gameData);

  const {gameContextData, updateGameContextData} = useGameDataContext();

  useEffect(() => {
    const scoringElement = () => {
      return (
        <Text>
          {gameContextData!.homePlayerGamesWon ?? 0} -{' '}
          {gameContextData?.awayPlayerGamesWon ?? 0}
        </Text>
      );
    };

    navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => {
        return scoringElement();
      },
    });
  }, [navigation, gameContextData]);

  //TODO: handle tied score logic
  return (
    <SafeAreaView style={[GlobalStyles.screenBackground]}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 24,
            color: ColorDefinitions.white,
          }}>
          34m: 20s
        </Text>
        <ScoreContainer />
        <ServerSelection />
        <ScoringToolKit />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scoring;
