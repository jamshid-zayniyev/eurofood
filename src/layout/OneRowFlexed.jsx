import React from "react";

//tailwind-merge
import { twMerge } from 'tailwind-merge';

const OneRowFlexed = ({
  children,
  className,
  between = false,
  alignItems='center'
}) => {
  return (
    <div
      style={{
        justifyContent: `${between ? "space-between" : ""}`,
        alignItems:alignItems
      }}
      className={twMerge('flex', className)}
    >
      {children}
    </div>
  );
};

export default OneRowFlexed;
