import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>Image</div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green first-letter:
       ${isSmallCard ? 'text-base' : 'text-lg'}
       ${isSmallCard ? 'line-clamp-2' : ''}
       `}
          >
            title
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Card;
