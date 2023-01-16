import Image from 'next/image'
import styled from 'styled-components'

const StartMenu = {
   Container: styled.div`
      background: silver;
      border-bottom-color«: #424242;
      border-left-color: #fff;
      border-right-color: #424242;
      border-top-color: #fff;
      border-width: 2px;
      border: solid;
      bottom: 33px;
      color: #212529;
      position: absolute;
      width: 200px;
   `,
   Options: styled.div`
      cursor: default;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-top: 10px;

      &:hover {
         background-color: rgb(54, 54, 248);
         color: white;
      }
   `,
   ImageIcon: styled(Image)`
      height: 35px;
      margin-right: 5px;
      width: 35px;
   `,

   Line: styled.div`
      border-bottom: 1px solid black;
      box-shadow: rgb(196, 195, 195);
      height: 0px;
   `,
   List: styled.span`
      display: block;
      padding-left: 24px;
   `,
   WindowsBackground: styled.span`
      background-color: blue;

      background: -webkit-linear-gradient(#00045f, #010079, blue);
      background: blue;
      background: linear-gradient(#00045f, #010079, blue);
      display: inline-block;

      height: -webkit-fill-available;
      position: fixed;
      width: 21px;
   `,
   Text: styled.div`
      color: #fff;
      font-family: Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic, Arial, sans-serif;
      font-size: 16px;
      font-weight: bold;
      position: fixed;
      transform: rotate(-90deg) translate(-245px, -32px);
   `,
}
export default StartMenu
