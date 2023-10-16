import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import GameSetup from './GameSetup';
import {Colors} from '../../colors/Colors';

describe('<GameSetup />', () => {
  const disabledButtonStyle = Colors.secondaryDisabled;
  const btn_americanScoring = 'btn-americanScoring';
  const btn_englishScoring = 'btn-englishScoring';
  const btn_ninePoints = 'btn-9Points';
  const btn_11Points = 'btn-11Points';
  const btn_15Points = 'btn-15Points';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedNavigation = {
    setOptions: jest.fn(),
  };
  const mockedRoute = {
    params: {
      gameData: {
        homePlayerPoints: 0,
      },
    },
  };

  it('renders correctly', () => {
    renderer.create(
      <GameSetup
        navigation={mockedNavigation as any}
        route={mockedRoute as any}
      />,
    );
  });

  describe('American scoring', () => {
    it('disables 9 points when selecting american scoring', () => {
      const {getByTestId} = render(
        <GameSetup
          navigation={mockedNavigation as any}
          route={mockedRoute as any}
        />,
      );

      const americanScoringButton = getByTestId('btn-americanScoring');
      const ninePointsButton = getByTestId(btn_ninePoints);
      expect(americanScoringButton).not.toBeNull();
      expect(ninePointsButton).not.toBeNull();

      fireEvent.press(americanScoringButton);

      expect(ninePointsButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );
    });

    it('only gives the options for 11 points and 15 points', () => {
      const {getByTestId} = render(
        <GameSetup
          navigation={mockedNavigation as any}
          route={mockedRoute as any}
        />,
      );

      const americanScoringButton = getByTestId('btn-americanScoring');
      const elevenPointsButton = getByTestId(btn_11Points);
      const fifteenPointsButton = getByTestId(btn_15Points);
      const ninePointsButton = getByTestId(btn_ninePoints);

      expect(americanScoringButton).not.toBeNull();
      expect(ninePointsButton).not.toBeNull();
      expect(elevenPointsButton).not.toBeNull();
      expect(fifteenPointsButton).not.toBeNull();

      fireEvent.press(americanScoringButton);

      expect(ninePointsButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );
    });

    it('allows the user to switch to english scoring', () => {
      const {getByTestId} = render(
        <GameSetup
          navigation={mockedNavigation as any}
          route={mockedRoute as any}
        />,
      );

      const americanScoringButton = getByTestId(btn_americanScoring);
      fireEvent.press(americanScoringButton);
      expect(americanScoringButton.props.style.backgroundColor).not.toEqual(
        disabledButtonStyle,
      );

      const englishScoring = getByTestId(btn_englishScoring);
      fireEvent.press(englishScoring);
      expect(americanScoringButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );
    });
  });

  describe('English scoring', () => {
    it('disables 15 & 11 points when selecting english scoring', () => {
      const {getByTestId} = render(
        <GameSetup
          navigation={mockedNavigation as any}
          route={mockedRoute as any}
        />,
      );

      const englishScoringButton = getByTestId('btn-englishScoring');
      const elevenPointsButton = getByTestId(btn_11Points);
      const fifteenPointsButton = getByTestId(btn_15Points);
      const ninePointsButton = getByTestId(btn_ninePoints);

      expect(englishScoringButton).not.toBeNull();
      expect(ninePointsButton).not.toBeNull();
      expect(elevenPointsButton).not.toBeNull();
      expect(fifteenPointsButton).not.toBeNull();

      fireEvent.press(englishScoringButton);

      expect(fifteenPointsButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );

      expect(elevenPointsButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );
    });
  });
});
