'use client';

import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={'button'}
    className={//'custom-btn ${containerStyles}'} TO DO NO ME DEJA HACER DINÁMICO Y DEJAR EL CUSTOM BTN, entonces lo agregué en Hero.tsx
      containerStyles}
    onClick={handleClick}
    >
      <span
      className={'flex-1'}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
