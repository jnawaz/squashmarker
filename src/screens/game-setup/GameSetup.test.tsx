import 'react-native';
import React from 'react';
import GameSetup from './GameSetup';

import renderer from 'react-test-renderer';

describe('Game setup tests', () => {
  it('renders correctly', () => {
    renderer.create(
      <GameSetup navigation={} route={} />,
    );
  });
});
