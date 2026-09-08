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
import useGeolocation from "./hooks/useGeolocation"
import { calculateDistance } from "./services/api"

function App() {
  const { branches, loading, error } = useBranches();
  const [searchQuery, setSearchQuery] = useState('');
  const [openNow, setOpenNow] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
  const { location, error: geoError, getLocation } = useGeolocation();


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

  const branchesWithDistance = location
  ? visibleBranches
      .map((branch) => ({
        ...branch,
        distance: calculateDistance(
          location.lat,
          location.lng,
          branch.location.latitude,
          branch.location.longitude
        )
      }))
      .sort((a, b) => a.distance - b.distance)
  : visibleBranches

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Branch Locator</h1>
          <p>Find your nearest branch</p>
          {geoError && <p>{geoError}</p>}
        </div>
        <div className="sidebar-content">
          {selectedBranch ? (
            <BranchDetails branch={selectedBranch} onClose={() => setSelectedBranch(null)} />
          ) : (
            <>
              <SearchBar onSearch={setSearchQuery} />
              <FilterBar onFilterChange={setOpenNow} onGetLocation={getLocation} />
              <BranchList branches={branchesWithDistance} onSelect={setSelectedBranch} />
            </>
          )}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <MapView branches={branchesWithDistance} />
      </div>
    </div>
  ) 
}
export default App
