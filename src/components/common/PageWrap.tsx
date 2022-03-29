import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

interface PageWrapProps extends HTMLAttributes<HTMLDivElement> {}

const PageWrap: FC<PageWrapProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        'h-screen flex flex-col overflow-x-hidden',
        className,
      )}
    >
      <div className="p-10 mb-10 border-2 rounded-md h-200">header</div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="p-10 mt-10 border-2 rounded-md h-200">footer</div>
      <div id="common-modal-view" className="z-alert" />
    </div>
  );
};

export default PageWrap;
