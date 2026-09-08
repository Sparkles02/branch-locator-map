import { render, screen } from '@testing-library/react'
import BranchList from '../components/Sidebar/BranchList'

  const mockBranch = { 
    id: 'ZA-TEST-001',
    name: 'Mall of Africa',
    code: '006758',
    type: 'Full Service Branch',
    status: 'Active',
    location: {
      latitude: -25.9942,
      longitude: 28.1097,
      address: 'Mall of Africa',
      suburb: 'Waterfall',
      city: 'Midrand',
      postal_code: '1682'
    },
    contact: {
      phone: '+27877560861',
      email: 'bank@mallofafrica.co.za'
    },
    amenities: {
      has_atm: true,
      has_forex: false,
      wheelchair_accessible: true,
      has_parking: true,
      instant_card_printing: true
    },
    operating_hours: {
      weekday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '09:00', close: '13:00'}
    }
   }

  describe('BranchList', () => {
    it('renders branch cards', () => {
      render(<BranchList branches={[mockBranch]} onSelect={() => {}} />)
      expect(screen.getByText('Mall of Africa')).toBeInTheDocument()
    })

    it('shows empty state when no branches', () => {
      render(<BranchList branches={[]} onSelect={() => {}} />)
      expect(screen.getByText("No branches found")).toBeInTheDocument()
    })
    })