import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SafeImage({ src, alt, className }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`bg-fallback ${className ?? ''}`} aria-label={alt} role="img" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
