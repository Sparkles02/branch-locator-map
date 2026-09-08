import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../components/Search/SearchBar'

  describe('SearchBar', () => {
    it('renders the search input', () => {
      render(<SearchBar onSearch={() => {}} />)
      expect(screen.getByPlaceholderText("Search by name, suburb, city or postal code...")).toBeInTheDocument()
    })

    it('calls onSearch when user types', async () => {
      const onSearch = vi.fn()
      render(<SearchBar onSearch={onSearch} />)
      await userEvent.type(screen.getByPlaceholderText("Search by name, suburb, city or postal code..."), 'Sandton')
      expect(onSearch).toHaveBeenCalled()
    })
  })