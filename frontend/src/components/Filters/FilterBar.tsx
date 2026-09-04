interface FilterBarProps {
  onFilterChange: (openNow: boolean) => void
}

function FilterBar({ onFilterChange }: FilterBarProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onFilterChange(e.target.checked)}
        />
        Open Now
      </label>
    </div>
  )
}

export default FilterBar