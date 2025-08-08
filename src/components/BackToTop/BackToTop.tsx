import { FaAngleUp } from 'react-icons/fa';
import useScrollStore from '../../zustand/scroll';
import clsx from 'clsx';
import { useEffect } from 'react';

const BackToTop = () => {
  const { isScroll, setIsScroll } = useScrollStore();

  useEffect(() => {
    const toggleVisible = () => {
      if (pageXOffset > 100) {
        setIsScroll(isScroll);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [isScroll, setIsScroll]);

  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      onClick={handleScroll}
      aria-label='Button to return to the top of the page'
      className={clsx(
        'fixed right-5 xl:right-8 bottom-5  flex items-center justify-center bg-[var(--back-bg-button)] hover:bg-[var(--hover-back-bg-button)] backdrop-blur-[4px] rounded-[8px] p-2.5 group cursor-pointer duration-150 ease-in-out border-[var(--secondary-bg-section)] z-997',
        isScroll ? 'opacity-full translate-y-[-10px]' : 'opacity-0 translate-y-0'
      )}
    >
      <FaAngleUp className='text-[var(--light-text-color)] text-[24px]' />
    </button>
  );
};

export default BackToTop;
