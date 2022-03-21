export interface UseButtonI {
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'default';
  rounded?: boolean;
  outline?: boolean;
}

export const useButton = ({ size, type, rounded = false, outline = false }: UseButtonI) => {
  const defaultSize = 'medium';
  const defaultType = 'default';

  const buttonSizes = {
    small: 'w-24',
    medium: 'w-50',
    large: 'w-100'
  };

  return {
    sizeButton: buttonSizes[size || defaultSize],
    typeButton: type || defaultType,
    rounded: rounded ? 'outline outline-offset-2 outline-2 rounded-md' : '',
    outline: outline ? 'outline outline-offset-2 outline-2 rounded-md' : ''
  } 
};
