import React from 'react'
import Window from './Window'
import { render } from '@testing-library/react'

describe('Window', () => {
   it('It should mount ', () => {
      const { getByText } = render(<Window />)
      expect(getByText('Window Component')).toBeTruthy()
   })
})
