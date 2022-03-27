import React from 'react';
import Portal from '../common/Portal';
import styled from 'styled-components';

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
  background-color: rgba(28, 32, 39, 0.7);
`;
type Props = {};

const Modal = (props: Props) => {
  return (
    <Portal selector="#common-modal-view">
      <BackDrop>
        <div>
          <div></div>
        </div>
      </BackDrop>
    </Portal>
  );
};

export default Modal;
