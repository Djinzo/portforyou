import StartMenus from '@components/startMenu/StartMenu'
import { NextPage } from 'next'
import React from 'react'
import MainScreenStyle from './MainScreen.style'

const MainScreen: NextPage = () => (
   <MainScreenStyle.Container>
      <StartMenus />
   </MainScreenStyle.Container>
)

export default MainScreen
