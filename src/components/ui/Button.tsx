import { ReactNode } from 'react';

function Button({ children, isSubmit, onClick }: Props) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className="rounded-md border border-purple-600 bg-purple-600 px-8 py-3 font-semibold uppercase text-white transition-colors ease-in-out hover:border-purple-800 hover:bg-purple-800 hover:text-white active:border-purple-900 active:bg-purple-900"
    >
      {children}
    </button>
  );
}

type Props = {
  children: ReactNode;
  isSubmit?: boolean;
  onClick?: () => void;
};

Button.defaultProps = {
  isSubmit: false,
  onClick: () => {},
};

export default Button;
