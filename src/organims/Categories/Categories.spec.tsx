import React from 'react';
import { render } from '@testing-library/react';
import Categories from './index';

const Props = {};

beforeEach(() => {
  render(<Categories {...Props} />);
});

xtest('Its rendering', () => {});
