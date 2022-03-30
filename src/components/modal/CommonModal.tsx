import React, { useContext, FC, useCallback, useEffect, useMemo } from 'react';
import Portal from '../common/Portal';
import { CommonModalContext } from '~/contexts/commonModalContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type CommonModalProps = {};
const Container = styled.div`
  position: absolute;
  width: 800px;
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

  const { on, onConfirmFunc, onCancleFunc } = commonState;

  const _color = useMemo(() => {
    const COLOR_MAP = {
      'common-yellow': 'bg-common-yellow',
      'common-orange': 'bg-common-orange',
      'common-green': 'bg-common-green',
      'common-red': 'bg-common-red',
      'common-blue': 'bg-common-blue',
    };

    return COLOR_MAP[commonState.color ?? 'common-yellow'];
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
          {commonState?.title && commonState.icon ? (
            <div className="flex flex-col justify-center align-center mr-[10px]">
              <FontAwesomeIcon
                size={'lg'}
                color="#fff"
                icon={['fas', commonState.icon]}
              />
            </div>
          ) : null}
          <div className="flex flex-col items-center justify-center text-lg font-bold text-white">
            {commonState?.title ?? ''}
          </div>
          <div className="flex absolute right-[2.5rem]">
            <button
              title="twitter"
              type="button"
              className=""
              onClick={closeCommonModal}
            >
              <FontAwesomeIcon size={'2x'} color="#fff" icon={['fas', 'x']} />
            </button>
          </div>
        </div>

        <div className="flex flex-col p-10">
          {commonState.topContent && (
            <div className="flex flex-row items-center justify-start text-zinc-400">
              <div className="flex items-center justify-center mr-1">
                <FontAwesomeIcon
                  size={'xs'}
                  color="#9ca3af"
                  icon={['fas', 'exclamation']}
                />
              </div>
              <div className="text-sm truncate">{commonState.topContent}</div>
            </div>
          )}

          <div className="pt-5 pb-5">{commonState.content}</div>

          {commonState.bottomContent && (
            <div className="flex flex-row items-center justify-start text-zinc-400">
              <div className="flex items-center justify-center mr-1">
                <FontAwesomeIcon
                  size={'xs'}
                  color="#9ca3af"
                  icon={['fas', 'exclamation']}
                />
              </div>
              <div className="text-sm truncate">
                {commonState.bottomContent}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-center w-full px-10 mt-10 mb-10">
          {commonState.onConfirmFunc ? (
            <>
              {!commonState.hideCancleButton && (
                <button
                  className={classNames(
                    'mr-[16px] flex items-center justify-center rounded-lg w-full h-[50px] border p-5',
                    'border-gray-400',
                    // _color,
                  )}
                  onClick={handleCancel}
                >
                  {commonState.cancleText}
                </button>
              )}
              {!commonState.hideConfirmButton && (
                <button
                  className={classNames(
                    'flex items-center justify-center rounded-lg w-full text-white h-[50px] border p-5',
                    _color,
                  )}
                  onClick={handleConfirm}
                >
                  {commonState.confirmText}
                </button>
              )}
            </>
          ) : (
            <>
              {!commonState.hideCancleButton && (
                <button
                  className={classNames(
                    'flex items-center justify-center rounded-lg w-full h-[50px] border p-5',
                    'border-gray-400',
                    // _color,
                  )}
                  onClick={handleCancel}
                >
                  {commonState.cancleText}
                </button>
              )}
            </>
          )}
        </div>
      </Container>
    </Portal>
  );
};

export default CommonModal;

// className={`border theme-border-${color} bg-main-dark rounded-md border-2 border-red-800 fixed bg-cyan-800`}
//
