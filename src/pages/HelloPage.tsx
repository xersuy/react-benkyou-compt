import React, { useContext } from 'react';
import PageWrap from '~/components/common/PageWrap';
import { CommonModalContext } from '~/contexts/commonModalContext';

type Props = {};

const HelloPage = (props: Props) => {
  const { openCommonModal } = useContext(CommonModalContext);

  return (
    <PageWrap>
      <div className="flex flex-col w-full max-w-screen-xl border-2 ">
        <div className="flex flex-col">
          <button
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-common-yellow hover:bg-common-yellow-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'alert',
                backdrop: true,
                title: '경고 타입의 타이틀',
                content: '1111111111111111111111',
              });
            }}
          >
            경고창
          </button>

          <button
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-common-yellow hover:bg-common-yellow-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'success',
                backdrop: true,
                title: '경고 타입의 타이틀',
                content: '1111111111111111111111',
              });
            }}
          >
            확인
          </button>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </PageWrap>
  );
};

export default HelloPage;
