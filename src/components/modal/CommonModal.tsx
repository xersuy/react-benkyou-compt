import React, { useContext, FC, useCallback, useEffect, useMemo } from 'react';
import Portal from '../common/Portal';
import { CommonModalContext } from '~/contexts/commonModalContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type CommonModalProps = {};
const Container = styled.div`
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  overflow: hidden;
  display: block;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`;

const CommonModal: FC<CommonModalProps> = () => {
  const { commonState, closeCommonModal } = useContext(CommonModalContext);

  const { on, color, onConfirmFunc, onCancleFunc } = commonState;

  const _color = useMemo(() => {
    console.log(`bg-${commonState.color}`);
    return `bg-${commonState.color}`;
  }, [commonState]);

  const handleConfirm = useCallback(() => {
    onConfirmFunc?.();
    closeCommonModal();
  }, [onConfirmFunc, closeCommonModal]);

  const handleCancel = useCallback(() => {
    onCancleFunc?.();
    closeCommonModal();
  }, [onCancleFunc, closeCommonModal]);

  // useEffect(() => {
  //   console.log('commonState : ', commonState.color);
  //   console.log('_color : ', _color);
  // }, [commonState, _color]);

  if (!on) {
    return null;
  }

  return (
    <Portal selector="#common-modal-view">
      <Container
        className={
          'border-2 border-gray-500 border-rounded rounded-lg bg-gray-100'
        }
      >
        <div
          className={classNames(
            'flex flex-row justify-start align-center p-10',
            _color,
          )}
        >
          {/* //   'bg-common-yellow': commonState.color === 'common-yellow',
            //   'bg-common-orange': commonState.color === 'common-orange',
            //   'bg-common-green': commonState.color === 'common-green',
            //   'bg-common-red': commonState.color === 'common-red',
            //   'bg-common-blue': commonState.color === 'common-blue', */}
          {commonState.icon ? (
            <div className="mr-[10px]">
              <FontAwesomeIcon
                size={'2x'}
                color="#fff"
                icon={['fas', commonState.icon]}
              />
            </div>
          ) : null}
          <div className="flex flex-col justify-center text-2xl align-center">
            {commonState?.title ?? ''}
          </div>
        </div>
        <div>
          <div>topContent</div>
          <div>content</div>
          <div>bottomContent</div>
        </div>
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleConfirm}>확인</button>
      </Container>
    </Portal>
  );
};

export default CommonModal;

// className={`border theme-border-${color} bg-main-dark rounded-md border-2 border-red-800 fixed bg-cyan-800`}
//
