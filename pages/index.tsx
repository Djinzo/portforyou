import type { NextPage } from 'next'
import Mainscreen from './MainScreen/MainScreen'
import TaskBar from '@components/taskBar/taskBar'

const Home: NextPage = () => {
   return <Mainscreen>
      <TaskBar/>
   </Mainscreen>
}

export default Home
