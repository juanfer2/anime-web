import { useButton, UseButtonI } from './';

const props: UseButtonI = {
  outline: false,
  size: 'medium',
  typeHtml: 'button'
};

describe('useButton hook', () => {
  describe('default', () => {
    test('Should return default props', () => {
      const { sizeButton, typeButton, typeHtmlButton, roundedButton, outlineButton } =
        useButton(props);

      expect(sizeButton).toBe('px-5 m-2');
      expect(typeButton).toBe('light');
      expect(typeHtmlButton).toBe('button');
      expect(roundedButton).toBe('');
      expect(outlineButton).toBe('rounded-md');
    });
  });

  describe('test props', () => {
    describe('Outline', () => {
      test('Should return outline true', () => {
        const { outlineButton } = useButton({ ...props, outline: true });

        expect(outlineButton).toBe('outline outline-offset-2 outline-2 rounded-md');
      });

      test('Should return outline false', () => {
        const { outlineButton } = useButton({ ...props, outline: false });

        expect(outlineButton).toBe('rounded-md');
      });
    });

    describe('Rounded', () => {
      test('Should return rounded props', () => {
        const { roundedButton } = useButton({ ...props, rounded: true });

        expect(roundedButton).toBe('rounded-full');
      });

      test('Should return rounded props', () => {
        const { roundedButton } = useButton({ ...props, rounded: false });

        expect(roundedButton).toBe('');
      });
    });

    describe('Sizes props', () => {
      test('Should be small', () => {
        const { sizeButton } = useButton({ ...props, size: 'small' });

        expect(sizeButton).toBe('px-4 m-2');
      });

      test('Should be medium', () => {
        const { sizeButton } = useButton({ ...props, size: 'medium' });

        expect(sizeButton).toBe('px-5 m-2');
      });

      test('Should be large', () => {
        const { sizeButton } = useButton({ ...props, size: 'large' });

        expect(sizeButton).toBe('px-6 m-2 text-lg');
      });

      test('Should be big', () => {
        const { sizeButton } = useButton({ ...props, size: 'big' });

        expect(sizeButton).toBe('h-12 px-6 m-2 text-lg');
      });
    });

    describe('TypeHtml props', () => {
      test('Should be button', () => {
        const { typeHtmlButton } = useButton({ ...props, typeHtml: 'button' });

        expect(typeHtmlButton).toBe('button');
      });

      test('Should be submit', () => {
        const { typeHtmlButton } = useButton({ ...props, typeHtml: 'submit' });

        expect(typeHtmlButton).toBe('submit');
      });

      test('Should be reset', () => {
        const { typeHtmlButton } = useButton({ ...props, typeHtml: 'reset' });

        expect(typeHtmlButton).toBe('reset');
      });
    });
  });
});
