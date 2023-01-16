import StartMenu from '@components/startMenu/StartMenu'
import React, { useState } from 'react'
import TaskBarStyle from './taskBar.style'

import WindowsImage from '@assets/windows-0.png'
interface TaskBarProps {}

const TaskBar: React.FC<TaskBarProps> = (): React.ReactElement => {
   const [showStartMenue, setShowStartMenue] = useState(false)

   function handelShowStartMenueEvent() {
      setShowStartMenue(!showStartMenue)
   }

   return (
      <TaskBarStyle.Container>
         {showStartMenue ?? <StartMenu />}
         <TaskBarStyle.TaskBar onClick={() => handelShowStartMenueEvent()}>
            <TaskBarStyle.StartButton>
               <TaskBarStyle.StartImage src={WindowsImage} width={18} height={18} />
               <TaskBarStyle.StartText>Start</TaskBarStyle.StartText>
            </TaskBarStyle.StartButton>
            <TaskBarStyle.Time>10:20 PM</TaskBarStyle.Time>
         </TaskBarStyle.TaskBar>
      </TaskBarStyle.Container>
   )
}

export default TaskBar
