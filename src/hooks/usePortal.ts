import { useCallback, useState } from 'react';

export const usePortal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closePortal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openPortal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { openPortal, closePortal, isOpen };
};
