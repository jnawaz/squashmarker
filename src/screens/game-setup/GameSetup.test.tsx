import 'react-native';
import React from 'react';
import GameSetup from './GameSetup';
import {render} from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(),
}));
jest.mock('@react-navigation/core', () => ({
  Navigator: jest.fn(),
}));

jest.mock('@react-native-segmented-control/segmented-control', () => {});
describe('Game setup tests', () => {
  it.skip('renders GameSetup', () => {
    render(<GameSetup navigation={{} as any} route={{} as any} />);
  });
});
