import React from 'react';
import { render } from '@testing-library/react';

import { Heroes } from '@/types/heroes';
import DialogTitleComponent from '@/components/atoms/DialogTitle/DialogTitle';

const mockHeroes: Heroes[] = [
  { id: 1, name: 'Hero1', powerstats: {}, images: {} },
  { id: 2, name: 'Hero2', powerstats: {}, images: {} }
];

describe('DialogTitleComponent', () => {
  it('renders component with default colors', () => {
    const { getByText } = render(
      <DialogTitleComponent selectedHeroes={mockHeroes} winner={null} />
    );
    expect(getByText('Batalha entre')).toBeInTheDocument();
    expect(getByText('Hero1')).toHaveStyle('color: inherit');
    expect(getByText('Hero2')).toHaveStyle('color: inherit');
  });

  it('renders component with winner colors', () => {
    const { getByText } = render(
      <DialogTitleComponent selectedHeroes={mockHeroes} winner={'Hero1'} />
    );
    expect(getByText('Batalha entre')).toBeInTheDocument();
    expect(getByText('Hero1')).toHaveStyle('color: green');
    expect(getByText('Hero2')).toHaveStyle('color: red');
  });
});
