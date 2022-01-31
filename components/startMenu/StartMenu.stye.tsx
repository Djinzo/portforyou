import Image from 'next/image'
import styled from 'styled-components'

const StartMenu = {
   Container: styled.div`
      border: solid;
      border-width: 2px;
      border-bottom-color: #424242;
      border-right-color: #424242;
      border-left-color: #fff;
      border-top-color: #fff;
      background: silver;
      color: #212529;
      position: absolute;
      bottom: 33px;
      width: 10%;
   `,
   Options: styled.div`
      cursor: default;
      padding-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      &:hover {
         background-color: rgb(54, 54, 248);
         color: white;
      }
   `,
   ImageIcon: styled(Image)`
      margin-right: 5px;
      width: 35px;
      height: 35px;
   `,

   Line: styled.div`
      height: 0px;
      border-bottom: 1px solid black;
      box-shadow: rgb(196, 195, 195);
   `,
}
export default StartMenu
