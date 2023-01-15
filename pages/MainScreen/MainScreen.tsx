import Disktop from '@components/Disktop/Disktop'
import StartMenus from '@components/startMenu/StartMenu'
import TaskBar from '@components/taskBar/taskBar'
import { NextPage } from 'next'
import React from 'react'
import MainScreenStyle from './MainScreen.style'

const MainScreen: NextPage = () => (
   <MainScreenStyle.Container>
      <Disktop />
      <TaskBar />
   </MainScreenStyle.Container>
)

export default MainScreen
