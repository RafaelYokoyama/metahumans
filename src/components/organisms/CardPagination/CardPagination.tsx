// CardPagination.js
import React, { useState, useEffect } from 'react';
import Card from '@/components/organisms/Card/Card';
import { calculateTotalPower } from '@/utils/calculateTotalPower';
import { useDataContext } from '@/contexts/DataContext';
import { Heroes } from '@/types/heroes';
import PaginationComponent from '@/components/molecules/Pagination/Pagination';
import Header from '../Header/Header';
import CustomModal from '../Modal/Modal';
import { Alert, Box } from '@mui/material';

type Event = React.ChangeEvent<unknown>;

const ITEMS_PER_PAGE = 8;

function CardPagination() {
  const { data } = useDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Heroes[] | null>(null);
  const [selectedHeroes, setSelectedHeroes] = useState<Heroes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedHeroNames, setSelectedHeroNames] = useState<string[]>([]);

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

  const handleHeroSelection = (hero: Heroes) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
      setSelectedHeroNames([...selectedHeroNames, hero.name]);
      setShowAlert(true);
    }

    if (selectedHeroes.length === 1) {
      const hero1 = selectedHeroes[0];
      const hero2 = hero;
      const hero1TotalPower = calculateTotalPower(hero1.powerstats);
      const hero2TotalPower = calculateTotalPower(hero2.powerstats);

      if (hero1TotalPower > hero2TotalPower) {
        setWinner(hero1.name);
      } else if (hero1TotalPower < hero2TotalPower) {
        setWinner(hero2.name);
      } else {
        setWinner("It's a tie!");
      }

      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setWinner(null);
    setSelectedHeroes([]);
    setSelectedHeroNames([]);
  };

  const totalPages = Math.ceil((filteredData || []).length / ITEMS_PER_PAGE);

  return (
    <Box className="flex flex-col items-center justify-center w-full py-4" position="relative" zIndex="0">
      <Header handleSearchChange={handleSearchChange} searchTerm={searchTerm} />

      {showAlert && (
        <Box >
          {selectedHeroNames.map((name, index) => (
            <Alert key={index} severity="success" onClose={() => setShowAlert(false)}>
              Você selecionou o herói: {name}
            </Alert>
          ))}
        </Box>
      )}
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
                  selected={selectedHeroes.includes(hero)}
                  handleClick={() => handleHeroSelection(hero)}
                  resetSelection={handleModalClose}
                />
              </div>
            ))}
          </div>

          <PaginationComponent count={totalPages} page={currentPage} onChange={handlePageChange} />

          <CustomModal isOpen={isModalOpen} selectedHeroes={selectedHeroes} winner={winner} onClose={handleModalClose} />
        </>
      ) : (
        <p className="pt-5">Nenhum herói encontrado.</p>
      )}

    </Box>
  );
}

export default CardPagination;
