import type { Branch } from "../../types/branch";
import BranchCard from "./BranchCard";

interface BranchListProps {
    branches: Branch[]
}

function BranchList({ branches }: BranchListProps) {
    return (
    <div>
      {branches.map((branch) => (
        <BranchCard key={branch.id} branch={branch} />
      ))}
    </div>
  )
}
export default BranchList