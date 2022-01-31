import React from 'react'
import TemplateName from './TemplateName'
import { render } from '@testing-library/react'

describe('TemplateName', () => {
   it('It should mount ', () => {
      const { getByText } = render(<TemplateName />)
      expect(getByText('TemplateName Page')).toBeTruthy()
   })
})
