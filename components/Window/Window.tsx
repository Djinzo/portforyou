import React from 'react'
import WindowStyle from './Window.style'
import Draggable from 'react-draggable'
import CloseImage from '@assets/close.svg'
import MaximazeImage from '@assets/maximize.svg'
import MinimazeImage from '@assets/minimze.svg'

interface WindowProps {}

const Window: React.FC<WindowProps> = ({}): React.ReactElement => (
   <Draggable>
      <WindowStyle.Container>
         <WindowStyle.TitleBar>
            <WindowStyle.TitleBarText>A Title Bar</WindowStyle.TitleBarText>
            <WindowStyle.TitleBarControle>
               <WindowStyle.ControleButton>
                  <WindowStyle.Icon src={MinimazeImage.src} />
               </WindowStyle.ControleButton>
               <WindowStyle.ControleButton>
                  <WindowStyle.Icon src={MaximazeImage.src} />
               </WindowStyle.ControleButton>
               <WindowStyle.ControleButton>
                  <WindowStyle.Icon src={CloseImage.src} />
               </WindowStyle.ControleButton>
            </WindowStyle.TitleBarControle>
         </WindowStyle.TitleBar>
         <WindowStyle.Body>this is windows body</WindowStyle.Body>
      </WindowStyle.Container>
   </Draggable>
)

export default Window
