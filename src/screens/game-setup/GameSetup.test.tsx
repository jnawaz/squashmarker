import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import GameSetup from './GameSetup';

describe('<GameSetup />', () => {
  const disabledButtonStyle = 'rgba(82, 179, 236, 0.3)';
  const btn_americanScoring = 'btn-americanScoring';
  const btn_englishScoring = 'btn-englishScoring';
  const btn_ninePoints = 'btn-9Points';

  it('renders correctly', () => {
    renderer.create(<GameSetup />);
  });

  describe('American scoring', () => {
    it('disables 9 points when selecting american scoring', () => {
      const {getByTestId} = render(<GameSetup />);

      const americanScoringButton = getByTestId('btn-americanScoring');
      const ninePointsButton = getByTestId(btn_ninePoints);
      expect(americanScoringButton).not.toBeNull();
      expect(ninePointsButton).not.toBeNull();

      fireEvent.press(americanScoringButton);

      expect(ninePointsButton.props.style.backgroundColor).toEqual(
        disabledButtonStyle,
      );
    });

    it('only gives the options for 11 points and 15 points', () => {});

    it('allows the user to switch to english scoring', () => {
      const {getByTestId} = render(<GameSetup />);

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
    it('disables 15 & 11 points when selecting english scoring', () => {});
  });
});
