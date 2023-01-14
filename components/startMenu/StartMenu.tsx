import React from 'react'

import computerImage from '@assets/computer-3.png'
import disktopImage from '@assets/desktop-1.png'
import settingGearImage from '@assets/settings_gear-3.png'
import accessibilityImage from '@assets/accessibility-3.png'
import helpbookImage from '@assets/help_book_big-0.png'
import executableImage from '@assets/executable-0.png'
import shutDownImage from '@assets/shut_down_normal-0.png'
import StartMenu from './StartMenu.stye'
import MenueOption from '@components/MenueOption/MenueOption'
import WindowsUpdatImage from '@assets/windows_update_large-2.png'

interface StartMenusProps {}

const StartMenus: React.FC<StartMenusProps> = (): React.ReactElement => {
   return (
      <StartMenu.Container>
         <StartMenu.WindowsBackground>
            <StartMenu.Text>Windows98</StartMenu.Text>
         </StartMenu.WindowsBackground>
         <StartMenu.List>
         <MenueOption title="Windows Update" icon={WindowsUpdatImage.src}  bullet={false} showLine={true}></MenueOption>
         <MenueOption title="Programe" icon={computerImage.src}  bullet={true} showLine={false}></MenueOption>
         <MenueOption title="Document" icon={disktopImage.src}  bullet={false} showLine={false}></MenueOption>
         <MenueOption title="Accessibility" icon={accessibilityImage.src}  bullet={false} showLine={false}></MenueOption>
         <MenueOption title="Help" icon={settingGearImage.src}  bullet={false} showLine={true}></MenueOption>
         <MenueOption title="Shutdown" icon={shutDownImage.src}  bullet={false} showLine={false}></MenueOption>
         </StartMenu.List>
      </StartMenu.Container>
   )
}

export default StartMenus
