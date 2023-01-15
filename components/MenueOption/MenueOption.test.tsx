import React from 'react'
import MenueOption from './MenueOption'
import { render } from '@testing-library/react'

describe('MenueOption', () => {
   it('It should mount ', () => {
      const { getByText } = render(<MenueOption />)
      expect(getByText('MenueOption Component')).toBeTruthy()
   })
})
