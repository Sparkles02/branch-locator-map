import type { Branch } from "../../types/branch"
import './BranchCard.css'
import { isOpenNow } from '../../services/api'

interface BranchCardProps {
    branch: Branch
    onSelect: (branch: Branch) => void
}

function BranchCard({ branch, onSelect }: BranchCardProps) {
    const open = isOpenNow(branch)
    return (
        <div onClick={() => onSelect(branch)} className="branch-card">
            <h3>{branch.name}</h3>
            <span className={open ? 'badge-open' : 'badge-closed'}>
            {open ? 'Open' : 'Closed'}
            </span>
            <p>{branch.type}</p>
            <p>{branch.location.address}, {branch.location.suburb}</p>
            {branch.distance !== undefined && (<p>{branch.distance.toFixed(1)} km away</p>)}
            <p>{branch.contact.phone}, {branch.contact.email}</p>
        </div>
    )
}
export default BranchCard