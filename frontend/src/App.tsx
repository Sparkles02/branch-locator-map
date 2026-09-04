import useBranches from "./hooks/useBranches";
import MapView from "./components/Map/MapView";
import BranchList from "./components/Sidebar/BranchList";

function App() {
  const { branches, loading, error } = useBranches();

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

  return (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ width: '400px', overflowY: 'auto' }}>
      <BranchList branches = {branches} />
    </div>
    <div style={{ flex: 1 }}>
      <MapView branches={branches} />
    </div>
  </div>
) 
}

export default App
