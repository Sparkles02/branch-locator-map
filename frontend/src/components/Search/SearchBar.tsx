import './SearchBar.css'

interface SearchBarProps {
    onSearch: (query: string) => void
} 

function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, suburb, city or postal code..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
export default SearchBar