import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Search from './components/Search';

describe('SearchBar', () => {
    it('renders an input element', () => {
        act(() => {
            render(<Search searchTerm="" setSearchTerm={() => {}} />);
        });
        const inputElement = screen.getByPlaceholderText('buscar pokemon');
        expect(inputElement).toBeInTheDocument();
    });
});