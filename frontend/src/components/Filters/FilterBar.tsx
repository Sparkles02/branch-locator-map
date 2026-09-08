import './FilterBar.css'

interface FilterBarProps {
  onFilterChange: (openNow: boolean) => void
  onGetLocation: () => void
}

function FilterBar({ onFilterChange, onGetLocation }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label>
        <input
          type="checkbox"
          onChange={(e) => onFilterChange(e.target.checked)}
        />
        Open Now
      </label>
      <button className="location-btn" onClick={onGetLocation}>
        Find My Location
      </button>
    </div>
  )
}

export default FilterBar