import type { Branch } from "../../types/branch"
import './BranchDetails.css'

interface BranchDetailsProp {
    branch: Branch;
    onClose: () => void 
}

function BranchDetails({ branch, onClose }: BranchDetailsProp) { 
    return (
        <div className="branch-details">
            <div className="branch-details-header">
                <button onClick={onClose} className="close-btn">Close</button>
                <h2>{branch.name}</h2>
            </div>

            <h3>Address</h3>
            <p>{branch.location.address}</p>
            <p>{branch.location.suburb}, {branch.location.city}, {branch.location.postal_code}</p>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${branch.location.latitude},${branch.location.longitude}`} target="_blank" rel="noreferrer"> Get Directions</a>

            <h3>Contact</h3>
            <a href={`tel:${branch.contact.phone}`}>{branch.contact.phone}</a>
            <p>{branch.contact.email}</p>

            <h3>Opening Hours</h3>
            <p>Weekday: {branch.operating_hours.weekday ? `${branch.operating_hours.weekday.open} - ${branch.operating_hours.weekday.close}` : 'Closed'}</p>
            <p>Saturday: {branch.operating_hours.saturday ? `${branch.operating_hours.saturday.open} - ${branch.operating_hours.saturday.close}` : 'Closed'}</p>
            <p>Sunday: {branch.operating_hours.sunday ? `${branch.operating_hours.sunday.open} - ${branch.operating_hours.sunday.close}` : 'Closed'}</p>
            
            <h3>Amenities</h3>
            <p>ATM: {branch.amenities.has_atm ? 'Yes' : 'No'}</p> 
            <p>Forex: {branch.amenities.has_forex ? 'Yes' : 'No'}</p> 
            <p>Parking: {branch.amenities.has_parking ? 'Yes' : 'No'}</p>
            <p>Instant Card Printing: {branch.amenities.instant_card_printing ? 'Yes' : 'No'}</p>
            <p>Wheelchair Accessible: {branch.amenities.wheelchair_accessible ? 'Yes' : 'No'}</p>
        </div>
    )
}
export default BranchDetails