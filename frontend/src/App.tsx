import { useState } from "react";
import useBranches from "./hooks/useBranches";
import MapView from "./components/Map/MapView";
import { isOpenNow } from "./services/api";
import SearchBar from "./components/Search/SearchBar";
import BranchList from "./components/Sidebar/BranchList";
import FilterBar from "./components/Filters/FilterBar";

function App() {
  const { branches, loading, error } = useBranches();
  const [searchQuery, setSearchQuery] = useState('');
  const [openNow, setOpenNow] = useState(false);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  if (error) {
    return <div>
      Something went wrong
    </div>
  }

  const filteredBranches = branches.filter((branch) => {
  const q = searchQuery.toLowerCase()
  return (
    branch.name.toLowerCase().includes(q) ||
    branch.location.suburb.toLowerCase().includes(q) ||
    branch.location.city.toLowerCase().includes(q) ||
    branch.location.postal_code.toLowerCase().includes(q)
  )
  })

  const visibleBranches = openNow
  ? filteredBranches.filter((branch) => isOpenNow(branch))
  : filteredBranches

  return (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ width: '400px', overflowY: 'auto' }}>
      <SearchBar onSearch={setSearchQuery} />
      <FilterBar onFilterChange={setOpenNow} />
      <BranchList branches = {visibleBranches} />
    </div>
    <div style={{ flex: 1 }}>
      <MapView branches={visibleBranches} />
    </div>
  </div>
) 
}
export default App
