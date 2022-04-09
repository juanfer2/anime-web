import React from 'react';
import { render } from '@testing-library/react';
import AnimationPage from './index';

const Props = {};

beforeEach(() => {
  render(<AnimationPage {...Props} />);
});

xtest('Its rendering', () => {});
