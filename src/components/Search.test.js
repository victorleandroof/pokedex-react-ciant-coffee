import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from './Search.jsx';

describe('SearchBar', () => {
    it('renders an input element', () => {
        render(<Search searchTerm="" setSearchTerm={() => {}} />);
        const inputElement = screen.getByPlaceholderText('buscar pokemon');
        expect(inputElement).toBeInTheDocument();
    });

    it('displays the correct placeholder text', () => {
        render(<Search searchTerm="" setSearchTerm={() => {}} />);
        const inputElement = screen.getByPlaceholderText('buscar pokemon');
        expect(inputElement).toHaveAttribute('placeholder', 'buscar pokemon');
    });

    it('displays the correct search term', () => {
        const searchTerm = 'Pikachu';
        render(<Search searchTerm={searchTerm} setSearchTerm={() => {}} />);
        const inputElement = screen.getByPlaceholderText('buscar pokemon');
        expect(inputElement).toHaveValue(searchTerm);
    });

    it('calls setSearchTerm when the input value changes', () => {
        const setSearchTerm = jest.fn();
        render(<Search searchTerm="" setSearchTerm={setSearchTerm} />);
        const inputElement = screen.getByPlaceholderText('buscar pokemon');

        fireEvent.change(inputElement, { target: { value: 'Charizard' } });

        expect(setSearchTerm).toHaveBeenCalledTimes(1);
        expect(setSearchTerm).toHaveBeenCalledWith('Charizard');
    });

    it('has the correct input type', () => {
        render(<Search searchTerm="" setSearchTerm={() => {}} />);
        const inputElement = screen.getByPlaceholderText('buscar pokemon');
        expect(inputElement).toHaveAttribute('type', 'text');
    });
});
