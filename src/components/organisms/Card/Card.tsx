import Icon from '@/components/atoms/Icon/Icon';
import cardColor from '@/utils/cardColor';
import { Box, Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  imgSrc?: string;
  imgAlt?: string;
  name?: string;
  powerstats?: number;
  handleClick?: () => void;
  selected?: boolean;
};

function Card({ imgAlt, imgSrc, name, powerstats = 0, handleClick, selected }: CardProps) {
  const [bgColor, borderColor] = cardColor(powerstats);

  const cardClasses = twMerge(
    'w-[204px]',
    'cursor-pointer',
    'rounded-md',
    selected ? 'border-3' : 'border-2',
    borderColor,
    'm-2',
    'flex',
    'flex-col',
    'items-center',
    'p-4',
  );

  const imageClasses = twMerge(
    'w-[174px]',
    'h-[184px]',
    'rounded-md',
    'shadow-md',
    'flex',
    'items-center',
    'justify-center'
  );


  const powerStatsContainerClasses = twMerge(
    'flex',
    'items-center',
    'justify-center',
    'gap-1'
  );

  const powerStatsTextClasses = twMerge(
    'mt-4',
    'text-[#A3A994]',
    'font-bold',
    'text-lg'
  );

  const textClasses = twMerge(
    'text-center',
    'text-[#A3A994]',
    'font-bold',
    'text-lg',
    'uppercase',
    'pt-4',
  );

  return (

    <div
      className={cardClasses}
      style={{ background: bgColor, transition: 'width 0.35s ease-in-out', borderColor: borderColor }}
      onClick={handleClick}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className={imageClasses}
        style={{ borderColor: borderColor, transition: 'width 0.35s ease-in-out' }}
      />
      <Typography className={textClasses}>
        {name?.toUpperCase()}
      </Typography>
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
