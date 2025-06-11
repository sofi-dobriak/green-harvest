import clsx from 'clsx';
import OrderForm from '../OrderForm/OrderForm';
import useModalFormStore from '../../zustand/modalOrderForm';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const Modal = () => {
  const { isModalFormOpen, closeModalForm } = useModalFormStore();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModalForm();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [closeModalForm]);

  return (
    <div
      onClick={() => closeModalForm()}
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-[rgba(63,63,63,0.56)] backdrop-blur-[2px] z-998 duration-150 ease-in-out',
        isModalFormOpen
          ? 'opacity-full visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      )}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='absolute bg-[#fbfbfb] py-10 px-5 w-full max-w-[320px] md:max-w-[450px] xl:max-w-[600px] xl:px-8 xl:py-13 rounded-[30px]'
      >
        <button
          onClick={() => closeModalForm()}
          className='absolute top-3 md:top-3 xl:top-5 right-4  md:right-4 xl:right-6 flex items-center justify-center group duration-150 ease-in-out cursor-pointer'
        >
          <IoMdClose className='text-[24px] text-[#141414] group-hover:text-[#7a3145] group-focus:text-[#7a3145]' />
        </button>
        <OrderForm />
      </div>
    </div>
  );
};

export default Modal;
