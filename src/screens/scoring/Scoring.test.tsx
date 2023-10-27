import 'react-native';
import React from 'react';
import Scoring from './Scoring';
import {render} from '@testing-library/react-native';

describe('Scoring tests', () => {
  it('renders correctly', () => {
    render(
      <Scoring
        navigation={
          {
            setOptions: jest.fn(),
          } as any
        }
        route={
          {
            params: {
              gameData: {},
            },
          } as any
        }
      />,
    );
  });
});
