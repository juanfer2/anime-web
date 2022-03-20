import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';

const Props = {};

beforeEach(() => {
  render(<Layout {...Props} />);
});

xtest('Its rendering', () => {});
