import React from 'react'

import accessibilityImage from '@assets/accessibility-3.png'
import computerImage from '@assets/computer-3.png'
import disktopImage from '@assets/desktop-1.png'
import settingGearImage from '@assets/settings_gear-3.png'
import shutDownImage from '@assets/shut_down_normal-0.png'
import WindowsUpdatImage from '@assets/windows_update_large-2.png'
import MenueOption from '@components/MenueOption/MenueOption'
import StartMenu from './StartMenu.stye'

interface StartMenusProps {}

const StartMenus: React.FC<StartMenusProps> = (): React.ReactElement => {
   return (
      <StartMenu.Container>
         <StartMenu.WindowsBackground>
            <StartMenu.Text>Windows98</StartMenu.Text>
         </StartMenu.WindowsBackground>
         <StartMenu.List>
            <MenueOption
               title="Windows Update"
               icon={WindowsUpdatImage.src}
               bullet={false}
               showLine={true}
            ></MenueOption>
            <MenueOption
               title="Programe"
               icon={computerImage.src}
               bullet={true}
               showLine={false}
            ></MenueOption>
            <MenueOption
               title="Document"
               icon={disktopImage.src}
               bullet={false}
               showLine={false}
            ></MenueOption>
            <MenueOption
               title="Accessibility"
               icon={accessibilityImage.src}
               bullet={false}
               showLine={false}
            ></MenueOption>
            <MenueOption
               title="Help"
               icon={settingGearImage.src}
               bullet={false}
               showLine={true}
            ></MenueOption>
            <MenueOption
               title="Shutdown"
               icon={shutDownImage.src}
               bullet={false}
               showLine={false}
            ></MenueOption>
         </StartMenu.List>
      </StartMenu.Container>
   )
}

export default StartMenus
