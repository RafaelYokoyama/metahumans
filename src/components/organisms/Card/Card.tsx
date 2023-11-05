import React from 'react';
import { Box, Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';
import cardColor from '@/utils/cardColor';
import Icon from '@/components/atoms/Icon/Icon';
import Image from 'next/image';

type CardProps = {
  imgSrc?: string;
  imgAlt?: string;
  name?: string;
  powerstats?: number;
  handleClick?: () => void;
  selected?: boolean;
  resetSelection?: () => void;
};

function Card({ imgAlt, imgSrc, name, powerstats = 0, handleClick, selected, resetSelection }: CardProps) {
  const [bgColor, borderColor] = cardColor(powerstats);

  const handleCardClick = () => {
    if (handleClick) {
      handleClick();
    }
  };


  const cardClasses = twMerge(
    'w-[179px]',
    'cursor-pointer',
    'rounded-md',
    selected ? 'border-3' : 'border-2',
    borderColor,
    selected ? 'p-3' : 'p-4',
    'm-2',
    'flex',
    'flex-col',
    'items-center',
    'transition-all'
  );

  const imageClasses = twMerge(
    'w-[174px]',
    'h-[144px]',
    'rounded-md',
    'shadow-md',
    'flex',
    'items-center',
    'justify-center',
    selected ? 'filter grayscale' : '',
    'transition-all'
  );

  const powerStatsContainerClasses = twMerge('flex', 'items-center', 'justify-center', 'gap-1');

  const powerStatsTextClasses = twMerge('mt-4', 'text-[#A3A994]', 'font-bold', 'text-lg');

  const textClasses = twMerge('text-center', 'text-[#A3A994]', 'font-bold', 'text-lg', 'uppercase', 'pt-4');

  return (
    <div
      className={cardClasses}
      style={{ background: bgColor, borderColor: borderColor }}
      onClick={handleCardClick}
    >
      <Image
        src={imgSrc || ''}
        alt={imgAlt || ''}
        width={174}
        height={144}
        className={imageClasses}
        style={{ borderColor: borderColor }} />
      <Typography className={textClasses}>{name?.toUpperCase()}</Typography>
      <Box className={powerStatsContainerClasses}>
        <Icon name="PowerCircleIcon" />
        <Typography className={powerStatsTextClasses}>
          {powerstats}
        </Typography>
      </Box>
    </div>
  );
}

export default Card;
