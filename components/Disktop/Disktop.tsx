import Window from '@components/Window/Window'
import React from 'react'
import DisktopStyle from './Disktop.style'

interface DisktopProps {}

const Disktop: React.FC<DisktopProps> = ({}): React.ReactElement => (
   <DisktopStyle.Container>
      <Window/>
   </DisktopStyle.Container>
)

export default Disktop
