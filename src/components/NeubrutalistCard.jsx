import React from 'react';

export default function NeubrutalistCard({
  children,
  className = '',
  accentBorder = false,
  hoverable = false
}) {
  return (
    <div
      className={`bg-[#111827] border-2 ${' '}
        ${accentBorder ? 'border-[#0EA5E9] shadow-[4px_4px_0px_0px_#0EA5E9]' : 'border-[#1F2937] shadow-[4px_4px_0px_0px_#1F2937]'}${' '}
        ${hoverable ? 'hover:border-[#0EA5E9] transition-all hover:-translate-y-0.5' : ''}${' '}
        ${className}`}
    >
      {children}
    </div>
  );
}