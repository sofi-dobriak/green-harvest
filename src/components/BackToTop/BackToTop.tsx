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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScroll}
      className={clsx(
        'fixed right-5 xl:right-8 bottom-5  flex items-center justify-center bg-[rgba(20,20,20,0.2)] hover:bg-[#28282870] backdrop-blur-[4px] rounded-[8px] p-2.5 group cursor-pointer duration-150 ease-in-out border-[#7a3145] ',
        isScroll ? 'opacity-full translate-y-[-10px]' : 'opacity-0 translate-y-0'
      )}
    >
      <FaAngleUp className='text-[#fbfbfb] text-[24px]' />
    </button>
  );
};

export default BackToTop;
