import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

const Props = {};

beforeEach(() => {
  render(<Loading {...Props} />);
});

xtest('Its rendering', () => {});
