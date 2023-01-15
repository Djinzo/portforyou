import React from 'react'
import _ComponentName_ from './_ComponentName_'
import { render } from '@testing-library/react'

describe('_ComponentName_', () => {
   it('It should mount ', () => {
      const { getByText } = render(<_ComponentName_ />)
      expect(getByText('_ComponentName_ Component')).toBeTruthy()
   })
})
