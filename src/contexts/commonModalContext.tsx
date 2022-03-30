import { useEffect } from 'react';
import { createContext, FC, ReactNode, useCallback, useState } from 'react';
import CommonModal from '~/components/modal/CommonModal';
import { IconName } from '@fortawesome/free-solid-svg-icons';
const MODAL_TYPE_MAPPER = {
  alert: {
    color: 'common-yellow',
    icon: 'circle-exclamation',
  },
  warn: {
    color: 'common-orange',
    icon: 'radiation',
  },

  success: {
    color: 'common-blue',
    icon: 'circle-check',
  },
  error: {
    color: 'common-red',
    icon: 'bug',
  },
  secondAlert: {
    color: 'common-green',
    icon: 'face-smile',
  },
};
type ModalType = keyof typeof MODAL_TYPE_MAPPER;
interface CommonState {
  modalType?: ModalType;
  on?: boolean;
  icon?: IconName;
  color?:
    | 'common-yellow'
    | 'common-orange'
    | 'common-green'
    | 'common-red'
    | 'common-blue';
  backdrop?: boolean;
  title?: string;
  content?: string | ReactNode;
  hideCancleButton?: boolean;
  hideConfirmButton?: boolean;
  onConfirmFunc?(): void;
  onCancleFunc?(): void;
  confirmText?: string;
  cancleText?: string;
  topContent?: string | ReactNode;
  bottomContent?: string | ReactNode;
}

const INIT_COMMON_STATE: CommonState = {
  on: false,
  icon: 'circle-exclamation',
  color: 'common-yellow',
  backdrop: true,
  title: '',
  topContent: '',
  content: '',
  bottomContent: '',
  hideCancleButton: false,
  hideConfirmButton: false,
  onConfirmFunc: undefined,
  onCancleFunc: undefined,
  confirmText: '확인',
  cancleText: '취소',
};

/*
 * Common Modal Context Types
 * Omit 특정 속성만 제거한 타입을 정의
 *
 */
interface CommonModalContext {
  commonState: CommonState;
  openCommonModal(state: Omit<CommonState, 'on'>): void;
  closeCommonModal(): void;
}
//
export const CommonModalContext = createContext<CommonModalContext>({
  commonState: INIT_COMMON_STATE,
  openCommonModal: () => {},
  closeCommonModal: () => {},
});

export const CommonModalProvider: FC = ({ children }) => {
  const [commonState, setCommonState] =
    useState<CommonState>(INIT_COMMON_STATE);

  /*
   * [func] openCommonModal
   * 모달 실행하는 함수
   */
  const openCommonModal = useCallback((state) => {
    const modalType: ModalType = state?.modalType ?? 'alert';

    const modalStyle = MODAL_TYPE_MAPPER[modalType];

    setCommonState({
      ...INIT_COMMON_STATE,
      ...modalStyle,
      ...state,
      on: true,
    });
  }, []);

  /*
   * [func] closeCommonModal
   * 모달 종료하는 함수
   */
  const closeCommonModal = useCallback(() => {
    setCommonState({
      ...INIT_COMMON_STATE,
    });
  }, []);

  return (
    <CommonModalContext.Provider
      value={{ commonState, closeCommonModal, openCommonModal }}
    >
      {children}
      {commonState.on && commonState.backdrop && (
        <div className="absolute top-0 w-full h-full opacity-50 left bg-slate-500 z-55555" />
      )}
      {/* inset-0 */}
      <CommonModal />
    </CommonModalContext.Provider>
  );
};
