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
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-common-yellow hover:bg-common-yellow-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'alert',
                backdrop: true,
                title: '알람 타이틀 커스텀',
                topContent:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
                bottomContent:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
              });
            }}
          >
            알람
          </button>

          <button
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-common-orange hover:bg-common-orange-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'warn',
                backdrop: false,
                title: '경고 타입의 타이틀',
                content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
                bottomContent:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

                cancleText: '커스텀 취소 버튼',
                // hideConfirmButton: false,
                onConfirmFunc: () => {
                  alert('확인 버튼 로그인을 실행했어요');
                },
              });
            }}
          >
            경고
          </button>

          <button
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-common-blue hover:bg-common-blue-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'success',
                backdrop: true,
                title: '짱구음악을 들어볼까요?',
                content: (
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/L6HRp9GUTT0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ),
                cancleText: '싫어요',
                confirmText: '좋아요',
                onCancleFunc: () => {
                  alert('싫어요 버튼을 클릭하였어요');
                },
                onConfirmFunc: () => {
                  alert('좋아요 버튼을 클릭하였어요');
                },
              });
            }}
          >
            성공
          </button>

          <button
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-common-red hover:bg-common-red-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'error',
                backdrop: true,
                title: '경고 타입의 타이틀',
                content: '1111111111111111111111',
              });
            }}
          >
            에러
          </button>

          <button
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-common-green hover:bg-common-green-300 md:py-4 md:text-lg md:px-10"
            onClick={() => {
              openCommonModal({
                modalType: 'secondAlert',
                backdrop: true,
                title: '경고 타입의 타이틀',
                content: '1111111111111111111111',
              });
            }}
          >
            세컨드
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
