import React, { FC } from 'react';

type WrapperProps = {};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="flex flex-col w-full">{children}</div>;
};

export default Wrapper;
// id="wrap"
