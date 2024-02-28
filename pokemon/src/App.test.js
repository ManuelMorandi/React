import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importar para extender las expectativas

import Page, { Pokemon } from './App';

describe('Page Component', () => {
  it('renders Page component', () => {
    const { getByText } = render(<Page />);
    
    expect(getByText('Pokemon search page')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    const { getByText } = render(<Page />);
    const input = getByText('Search');

    fireEvent.change(input, { target: { value: 'pikachu' } });

    expect(input.value).toBe('pikachu');
  });

  it('calls search function on button click', () => {
    const { getByText } = render(<Page />);
    const button = getByText('Search');
    const searchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({ json: () => Promise.resolve({}) });

    fireEvent.click(button);

    expect(searchSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Pokemon Component', () => {
  it('renders Pokemon component with empty data', () => {
    const { container } = render(<Pokemon pokemon={{ id: '' }} />);
    
    expect(container.firstChild).toBe(null);
  });

  it('renders Pokemon component with data', () => {
    const fakePokemon = { name: 'Pikachu', id: '25', types: [{ type: { name: 'electric' } }], sprite: 'pikachu.png' };
    const { getByText } = render(<Pokemon pokemon={fakePokemon} />);
    
    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(getByText('No. 25')).toBeInTheDocument();
    expect(getByText('electric')).toBeInTheDocument();
  });
});
