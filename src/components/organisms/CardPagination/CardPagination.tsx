'use client'

import React, { useState } from 'react';
import Card from '@/components/organisms/Card/Card';
import { calculateTotalPower } from '@/utils/calculateTotalPower';
import { useDataContext } from '@/contexts/DataContext';
import { makeStyles } from '@material-ui/styles';
import { Heroes } from '@/types/heroes';
import PaginationComponent from '@/components/molecules/Pagination/Pagination';

type Event = React.ChangeEvent<unknown>;

const ITEMS_PER_PAGE = 8;

function CardPagination() {
  const { data } = useDataContext();
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return null;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const visibleHeroes: Heroes[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_event: Event, value: number) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-wrap justify-center max-w-[1000px]  ">
        {visibleHeroes.map((hero: Heroes) => (
          <div key={hero.id} className="m-2 ">
            <Card
              name={hero.name}
              imgAlt={hero.name}
              imgSrc={hero.images.sm}
              powerstats={calculateTotalPower(hero.powerstats)}
            />
          </div>
        ))}
      </div>

      <PaginationComponent
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default CardPagination;
