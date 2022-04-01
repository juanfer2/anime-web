import React from 'react';
import { render } from '@testing-library/react';
import Anime from './index';

const Props = {};

beforeEach(() => {
  render(<Anime {...Props} />);
});

xtest('Its rendering', () => {});
