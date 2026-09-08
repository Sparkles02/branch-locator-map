import { isOpenNow, calculateDistance } from "../services/api";

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

  describe('isOpenNow', () => {
    it('returns false when day is closed (null)', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-09-07T10:00:00')) // Sunday
      const branch = { ...mockBranch, operating_hours: { ...mockBranch.operating_hours, sunday: null } }
      expect(isOpenNow(branch)).toBe(true)
      vi.useRealTimers()
    })

    it('returns false when outside opening hours', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-09-08T22:00:00')) // Monday at 22:00
      expect(isOpenNow(mockBranch)).toBe(false)
      vi.useRealTimers()
    })

    it('returns true when within opening hours', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-09-08T10:00:00')) // Monday at a time within 09:00-18:00
      expect(isOpenNow(mockBranch)).toBe(true)
      vi.useRealTimers()
    })
  })

  describe('calculateDistance', () => {
    it('returns 0 when coordinates are the same', () => {
      expect(calculateDistance(-25.9942, 28.1097, -25.9942, 28.1097)).toBe(0)
    })

    it('returns a positive number for different coordinates', () => {
      expect(calculateDistance(-25.9942, 28.1097, -33.9036, 18.4201)).toBeGreaterThan(0)
    })
  })

   