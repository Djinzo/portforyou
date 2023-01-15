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
      width: 200px;
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
   List: styled.span`
      padding-left: 24px;
      display: block;
   `,
   WindowsBackground: styled.span`
      display: inline-block;
      width: 21px;
      background-color: blue;
      position: fixed;
      height: -webkit-fill-available;
      background: linear-gradient(#00045f, #010079, blue);
      background: blue;
      background: -webkit-linear-gradient(#00045f, #010079, blue);
   `,
   Text: styled.div`
      font-family: Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, Arial, sans-serif;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      position: fixed;
      transform: rotate(-90deg) translate(-245px, -32px);
   `,
}
export default StartMenu
