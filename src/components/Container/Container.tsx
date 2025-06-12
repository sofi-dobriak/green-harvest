import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=' max-w-[375px] m-auto mt-0 mb-0 md:max-w-[768px] xl:max-w-[1280px]'>
      {children}
    </div>
  );
};

export default Container;
