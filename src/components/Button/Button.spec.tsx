import React from 'react';
import { render, screen } from '@testing-library/react';
import Wrappers from '@/utils/jest/wrapper'
import userEvent from '@testing-library/user-event'
import Button, { ButtonI } from './index';

const mockCallBack = jest.fn();

const props = {
  onClick: mockCallBack,
  outline: false,
  size: 'medium'
};

const ButtonComponent = (props) => (
  <Wrappers>
    <Button {...props}> Click Button </Button>
  </Wrappers>
)

const outlineClass = 'px-5 m-2 default outline outline-offset-2 outline-2 rounded-md';
const defaultClass = 'px-5 m-2 default rounded-md';

describe('Button component', () => {
  describe('Default', () => {
    beforeEach(() => {
      render(ButtonComponent({onClick: mockCallBack}));
    });

    test('Should render outline', () => {
      const component: HTMLSpanElement = screen.getByText('Click Button');
      userEvent.click(component);
  
      expect(component).toBeInTheDocument();
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(component).toHaveClass(defaultClass);
    });
  })
  
  describe('Button component', () => {
    beforeEach(() => {
      props.outline = true
      render(ButtonComponent(props));
    });

    test('Should render default', () =>{
      const component: HTMLSpanElement = screen.getByText('Click Button');
      userEvent.click(component);
  
      expect(component).toHaveClass(outlineClass);
    });
  })
});
