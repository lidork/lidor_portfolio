import React from 'react';

interface MaskIconProps {
  src: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MaskIcon({ src, size = 20, className = '', style = {} }: MaskIconProps) {
  const mergedClassName = ['asset-mask-icon', className].filter(Boolean).join(' ');
  return (
    <span
      aria-hidden="true"
      className={mergedClassName}
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...style,
      }}
    />
  );
}
