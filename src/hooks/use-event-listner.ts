import { useEffect } from 'react';

type TVoidFunction = () => void;

type TUseEventListener = (
  event: keyof WindowEventMap,
  fn: TVoidFunction
) => void;

const useEventListener: TUseEventListener = (event, fn) => {
  useEffect(() => {
    window.addEventListener(event, fn);
    return () => window.removeEventListener(event, fn);
  });
};

export default useEventListener;
