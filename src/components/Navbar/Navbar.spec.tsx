import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './index';

const Props = {};

beforeEach(() => {
  render(<Navbar {...Props} />);
});

xtest('Its rendering', () => {});
