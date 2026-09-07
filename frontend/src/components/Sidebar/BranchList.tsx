import type { Branch } from "../../types/branch"
import BranchCard from "./BranchCard"
import '../states.css'

interface BranchListProps {
    branches: Branch[]
    onSelect: (branch: Branch) => void
}

function BranchList({ branches, onSelect }: BranchListProps) {
    if (branches.length === 0) {
        return <div className="empty-state">No branches found</div>
    }
    return (
    <div>
      {branches.map((branch) => (
        <BranchCard 
          key={branch.id}
          branch={branch}
          onSelect={onSelect}
         />
      ))}
    </div>
  )
}
export default BranchList