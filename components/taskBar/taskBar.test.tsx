import React from 'react'
import TaskBar from './TaskBar'
import { render } from '@testing-library/react'

describe('TaskBar', () => {
   it('It should mount ', () => {
      const { getByText } = render(<TaskBar />)
      expect(getByText('TaskBar Component')).toBeTruthy()
   })
})
