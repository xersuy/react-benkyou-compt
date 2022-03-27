import React, { FC } from 'react';

type Props = {};

const Button: FC<Props> = ({ children }) => {
  return (
    <button className="custom_button">
      <div>{children}</div>
    </button>
  );
};
export default Button;
