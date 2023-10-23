import 'react-native';
import React from 'react';
import GameSetup from './GameSetup';

import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(),
}));
jest.mock('@react-navigation/core', () => ({
  Navigator: jest.fn(),
}));

jest.mock('@react-native-segmented-control/segmented-control', () => {});

describe('Game setup tests', () => {
  it('renders correctly', () => {
    renderer.create(<GameSetup navigation={{} as any} route={{} as any} />);
  });
});
