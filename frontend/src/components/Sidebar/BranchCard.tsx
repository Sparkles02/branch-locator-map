import type { Branch } from "../../types/branch"
import './BranchCard.css'

interface BranchCardProps {
    branch: Branch
    onSelect: (branch: Branch) => void
}

function BranchCard({ branch, onSelect }: BranchCardProps) {
    return (
        <div onClick={() => onSelect(branch)} className="branch-card">
            <h3>{branch.name}</h3>
            <p>{branch.type}</p>
            <p>{branch.location.address}, {branch.location.suburb}</p>
            <p>{branch.contact.phone}, {branch.contact.email}</p>
        </div>
    )
}
export default BranchCard