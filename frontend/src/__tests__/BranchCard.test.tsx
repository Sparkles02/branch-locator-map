import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BranchCard from '../components/Sidebar/BranchCard'

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

   describe('BranchCard', () => {
    it('renders branch name', () => {
      render(<BranchCard branch={mockBranch} onSelect={() => {}} />)
      expect(screen.getByText('Mall of Africa')).toBeInTheDocument()
    })

    it('calls onSelect when clicked', async () => {
      const onSelect = vi.fn()
      render(<BranchCard branch={mockBranch} onSelect={onSelect} />)
      await userEvent.click(screen.getByText('Mall of Africa'))
      expect(onSelect).toHaveBeenCalledWith(mockBranch)
    })
  })

  