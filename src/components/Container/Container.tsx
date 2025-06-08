import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='min-w-[320px] max-w-[375px] m-auto py-0 px-5 md:max-w-[768px] md:px-8 xl:max-w-[1280px] xl:px-25'>
      {children}
    </div>
  );
};

export default Container;
