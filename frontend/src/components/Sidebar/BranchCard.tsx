import type { Branch } from "../../types/branch";

interface BranchCardProps {
    branch: Branch
}

function BranchCard({ branch }: BranchCardProps) {
    return (
        <div>
            <h3>{branch.name}</h3>
            <p>{branch.type}</p>
            <p>{branch.location.address}, {branch.location.suburb}</p>
            <p>{branch.contact.phone}, {branch.contact.email}</p>
        </div>
    )
}
export default BranchCard