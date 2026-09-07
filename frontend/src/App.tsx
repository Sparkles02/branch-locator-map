import { useState } from "react"
import useBranches from "./hooks/useBranches"
import MapView from "./components/Map/MapView"
import { isOpenNow } from "./services/api"
import type { Branch } from "./types/branch"
import SearchBar from "./components/Search/SearchBar"
import BranchList from "./components/Sidebar/BranchList"
import FilterBar from "./components/Filters/FilterBar"
import BranchDetails from "./components/Sidebar/BranchDetails"
import './components/Sidebar/Sidebar.css'
import './components/states.css'

function App() {
  const { branches, loading, error } = useBranches();
  const [searchQuery, setSearchQuery] = useState('');
  const [openNow, setOpenNow] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)


  if (loading) {
    return (
    <div className="state">
      Loading...
    </div>
    )
  }

  if (error) {
    return (
    <div className="state">
      Something went wrong
    </div>
    )
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
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Branch Locator</h1>
          <p>Find your nearest branch</p>
        </div>
        <div className="sidebar-content">
          {selectedBranch ? (
            <BranchDetails branch={selectedBranch} onClose={() => setSelectedBranch(null)} />
          ) : (
            <>
              <SearchBar onSearch={setSearchQuery} />
              <FilterBar onFilterChange={setOpenNow} />
              <BranchList branches={visibleBranches} onSelect={setSelectedBranch} />
            </>
          )}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <MapView branches={visibleBranches} />
      </div>
    </div>
  ) 
}
export default App
