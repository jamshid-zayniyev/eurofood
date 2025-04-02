import React from "react";

//tailwind-merge
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }) => {
  return <div className={twMerge('containerr', className)}>{children}</div>;
};

export default Container;
