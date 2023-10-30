import React from 'react';
import ScoringButton from '../ScoringButtons/ScoringButton';

const ScoringToolKit = () => {
  return (
    <>
      <ScoringButton onTap={() => {}} title={'+1'} />
      <ScoringButton onTap={() => {}} title={'Stroke'} />
      <ScoringButton onTap={() => {}} title={'Let'} />
      <ScoringButton onTap={() => {}} title={'Handout'} />
    </>
  );
};

export default ScoringToolKit;
