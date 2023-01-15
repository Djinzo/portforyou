import React from 'react'
import MenueOptionStyle from './MenueOption.style'

interface MenueOptionProps {
   title: string
   icon: string
   bullet: boolean
   showLine: boolean
}

const MenueOption: React.FC<MenueOptionProps> = ({
   title,
   icon,
   bullet,
   showLine,
}): React.ReactElement => (
   <MenueOptionStyle.Container>
      <MenueOptionStyle.Options>
         <MenueOptionStyle.ImageIcon src={icon} />
         <MenueOptionStyle.Text>
            {title}
            {bullet ? <MenueOptionStyle.Bullet>▸</MenueOptionStyle.Bullet> : ''}
         </MenueOptionStyle.Text>
      </MenueOptionStyle.Options>
      {showLine ? <MenueOptionStyle.Line /> : ''}
   </MenueOptionStyle.Container>
)

export default MenueOption
