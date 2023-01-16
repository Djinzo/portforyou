import Disktop from '@components/Disktop/Disktop'
import TaskBar from '@components/taskBar/taskBar'
import { NextPage } from 'next'
import React from 'react'
import MainScreenStyle from './MainScreen.style'

const MainScreen: React.FC = () => (
   <MainScreenStyle>
      <Disktop />
      <TaskBar />
   </MainScreenStyle>
)

export default MainScreen
