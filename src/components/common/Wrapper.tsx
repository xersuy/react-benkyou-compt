import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

type WrapperProps = {};
const BUTTONS = ['HELLO', 'BYE', 'WARN'];

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex w-full border-2 border-slate-200">
      ddd
      <div>{children}</div>
      <div id="common_modal_view" />
    </div>
  );
};

export default Wrapper;
