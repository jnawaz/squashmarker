import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import GameSetup from './GameSetup';

describe('<GameSetup />', () => {
  const disabledButtonStyle = 'rgba(82, 179, 236, 0.3)';

  it('renders correctly', () => {
    renderer.create(<GameSetup />);
  });

  it('disables 9 points when selecting american scoring', () => {
    const {getByTestId} = render(<GameSetup />);

    const americanScoringButton = getByTestId('btn-americanScoring');
    const ninePointsButton = getByTestId('btn-9Points');
    expect(americanScoringButton).not.toBeNull();
    expect(ninePointsButton).not.toBeNull();

    fireEvent.press(americanScoringButton);

    expect(ninePointsButton.props.style.backgroundColor).toEqual(
      disabledButtonStyle,
    );
  });
});
