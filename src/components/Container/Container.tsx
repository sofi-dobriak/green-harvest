import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='min-w-[320px] max-w-[375px] m-auto py-0 px-5 md:px-8 xl:px-25 md:max-w-[768px] xl:max-w-[1280px]'>
      {children}
    </div>
  );
};

export default Container;
