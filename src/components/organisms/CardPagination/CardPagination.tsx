import React, { useState, useEffect } from 'react';
import Card from '@/components/organisms/Card/Card';
import { calculateTotalPower } from '@/utils/calculateTotalPower';
import { useDataContext } from '@/contexts/DataContext';
import { Heroes } from '@/types/heroes';
import PaginationComponent from '@/components/molecules/Pagination/Pagination';
import Header from '../Header/Header';

type Event = React.ChangeEvent<unknown>;

const ITEMS_PER_PAGE = 8;

function CardPagination() {
  const { data } = useDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Heroes[] | null>(null);

  useEffect(() => {
    if (data) {
      if (searchTerm) {
        const filteredHeroes = data.filter(
          (hero) => hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredHeroes);
        setCurrentPage(1);
      } else {
        setFilteredData(data);
      }
    }
  }, [data, searchTerm]);

  if (!data) return null;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const visibleHeroes: Heroes[] = (filteredData || []).slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_event: Event, value: number) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const totalPages = Math.ceil((filteredData || []).length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      <Header handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
      {visibleHeroes.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center max-w-[1000px]">
            {visibleHeroes.map((hero: Heroes) => (
              <div key={hero.id} className="m-2">
                <Card
                  name={hero.name}
                  imgAlt={hero.name}
                  imgSrc={hero.images.sm}
                  powerstats={calculateTotalPower(hero.powerstats)}
                />
              </div>
            ))}
          </div>

          <PaginationComponent count={totalPages} page={currentPage} onChange={handlePageChange} />

        </>
      ) : (
        <p className='pt-5'>Nenhum herói encontrado.</p>
      )}
    </div>
  );
}

export default CardPagination;
