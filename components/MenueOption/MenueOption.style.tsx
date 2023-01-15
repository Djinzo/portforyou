import styled from 'styled-components'
import Image from 'next/image'
const MenueOptionStyle = {
   Container: styled.div`
      
   `,


   Options: styled.div`
   padding: 10px 0 10px 0;
      &:hover {
         background-color: rgb(54, 54, 248);
         color: white;
      }
   `,
   ImageIcon: styled.img`
   width: 30px;
   vertical-align: middle;
   `,

   Line: styled.div`
      height: 0px;
      border-bottom: 1px solid black;
      box-shadow: rgb(196, 195, 195);
   `,
   Text: styled.span`
   vertical-align: middle;
   display: inline-block;
   padding: 0 2px 0 12px;
  
   `,
   Bullet:styled.span`
   display: inline;
   position: absolute;
   right: 3px;
   
   `

}

export default MenueOptionStyle
