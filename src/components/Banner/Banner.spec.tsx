import React from 'react';
import { render } from '@testing-library/react';
import Banner from './index';

const Props = {};

beforeEach(() => {
  render(<Banner {...Props} />);
});

xtest('Its rendering', () => {});
