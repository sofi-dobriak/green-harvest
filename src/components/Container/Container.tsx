import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='min-w-[320px] max-w-[375px] m-auto py-0 px-4 md:max-w-[768px] xl:min-w-[1280px]'>
      {children}
    </div>
  );
};

export default Container;
