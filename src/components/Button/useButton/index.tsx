export interface UseButtonI {
  size?: 'small' | 'medium' | 'large' | 'big';
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'light';
  rounded?: boolean;
  outline?: boolean;
  typeHtml?: "button" | "submit" | "reset";
}

export const useButton = ({ 
  size, type, typeHtml, rounded = false, outline = true
}: UseButtonI ) => {
  const defaultSize = 'medium';
  const defaultType = 'light';
  const defaultTypeHtml = 'button';

  const buttonSizes = {
    small: 'px-4 m-2',
    medium: 'px-5 m-2',
    large: 'px-6 m-2 text-lg',
    big: 'h-12 px-6 m-2 text-lg'
  };

  return {
    sizeButton: buttonSizes[size || defaultSize],
    typeButton: type || defaultType,
    typeHtmlButton: typeHtml || defaultTypeHtml,
    roundedButton: rounded ? 'rounded-full' : '',
    outlineButton: outline ? 'outline outline-offset-2 outline-2 rounded-md' : 'rounded-md'
  };
};
