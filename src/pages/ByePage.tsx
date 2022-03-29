import React, { useContext } from 'react';
import { CommonModalContext } from '~/contexts/commonModalContext';
type Props = {};

const ByePage = (props: Props) => {
  const {} = useContext(CommonModalContext);
  return (
    <div className="bye_page">
      <h1>ByePage</h1>
    </div>
  );
};

export default ByePage;
