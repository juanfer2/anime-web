import React from 'react';
import { render } from '@testing-library/react';
import SkeletonHome from './index';

const Props = {};

beforeEach(() => {
  render(<SkeletonHome {...Props} />);
});

xtest('Its rendering', () => {});
