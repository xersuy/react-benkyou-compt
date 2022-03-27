import { createContext, FC, ReactNode, useState } from 'react';

interface CommonModalContext {}

interface CommonState {
  on: boolean;
  title?: string;
  content?: string | ReactNode;
  onConfirmFunc?(): void;
  onCancleFunc?(): void;
  confirmText?: string;
  cancleText?: string;
  topContent?: string | ReactNode;
  bottomContent?: string | ReactNode;
}

const INIT_STATE: CommonState = {
  on: false,
  title: '',
  topContent: '',
  content: '',
  bottomContent: '',
  onConfirmFunc: undefined,
  onCancleFunc: undefined,
  confirmText: '확인',
  cancleText: '취소',
};

const CommonModalContext = createContext<CommonModalContext>({
  commonState: INIT_STATE,
});

export const CommonModalProvider: FC = ({ children }) => {
  const [commonState, setCommonState] = useState<CommonState>(INIT_STATE);

  console.log(commonState);

  return (
    <CommonModalContext.Provider value={{}}>
      {children}
      
    </CommonModalContext.Provider>
  );
};
