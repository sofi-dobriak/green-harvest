import clsx from 'clsx';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useInfoMessageStore } from '../../zustand/infoMessage';
import { useEffect } from 'react';

const InfoMessage = () => {
  const { isMessageVisible, closeMessage } = useInfoMessageStore();

  useEffect(() => {
    if (!isMessageVisible) return;

    const timer = setTimeout(() => {
      closeMessage();
    }, 2500);

    return () => clearTimeout(timer);
  }, [isMessageVisible, closeMessage]);

  return (
    <div
      onClick={() => closeMessage()}
      className={clsx(
        'flex items-center justify-center  p-4 rounded-[8px] gap-2 bg-[var(--secondary-bg-section)] max-w-[320px] fixed z-1000 top-5 duration-150',
        isMessageVisible
          ? 'right-5 opacity-full visible pointer-events-auto'
          : 'right-0 opacity-0 invisible pointer-events-none'
      )}
    >
      <FaRegCheckCircle className='text-[22px] text-[var(--light-text-color)]' />
      <p className='text-[18px] font-medium text-[var(--light-text-color)] uppercase'>
        The message was sent
      </p>
    </div>
  );
};

export default InfoMessage;
