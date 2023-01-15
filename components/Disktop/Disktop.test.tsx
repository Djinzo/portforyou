import React from 'react'
import Disktop from './Disktop'
import { render } from '@testing-library/react'

describe('Disktop', () => {
   it('It should mount ', () => {
      const { getByText } = render(<Disktop />)
      expect(getByText('Disktop Component')).toBeTruthy()
   })
})
