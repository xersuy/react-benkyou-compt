import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  selector: string;
  onRender?(element: HTMLElement): void;
}

/**
 * Portal Component
 * 실제로 createPortal를 이용해서 렌더링을 해주는 컴포넌트
 *
 */
const Portal: React.FC<PortalProps> = ({ selector, onRender, children }) => {
  const [element, setElement] = useState<HTMLElement>();
  const onRenderRef = useRef(onRender);

  useEffect(() => {
    const elem = document.querySelector(selector) as HTMLElement;

    if (elem) {
      setElement(elem);
    }
  }, [selector]);

  useEffect(() => {
    onRenderRef.current = onRender;
  }, [onRender]);

  useEffect(() => {
    if (element) {
      onRenderRef.current?.(element);
    }
  }, [element]);

  if (!element) {
    return null;
  }

  return ReactDOM.createPortal(children, element);
};

export default Portal;
