import styled from 'styled-components'
import Image from 'next/image'
const WindowStyle = {
   Container: styled.div`
      cursor: default;
      display: inline-block;
      position: absolute;
      background: silver;
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey,
         inset 2px 2px #fff;
      padding: 3px;
   `,
   TitleBar: styled.div`
      align-items: center;
      background: linear-gradient(90deg, navy, #1084d0);
      display: flex;
      justify-content: space-between;
      padding: 3px 2px 3px 3px;
   `,

   TitleBarText: styled.div`
      color: #fff;
      font-weight: 700;
      letter-spacing: 0;
      margin-right: 24px;
   `,
   TitleBarControle: styled.div`
      display: flex;
   `,
   ControleButton: styled.div`
      margin: 0 0 0 2px;
      min-height: 14px;
      min-width: 16px;
      padding: 0;
      background: silver;
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
         inset 2px 2px #dfdfdf;
      border: none;
      border-radius: 0;
      text-align: center;
   `,
   Body: styled.div`
      margin: 8px;
      display: block;
   `,
   Icon: styled.img``,
}

export default WindowStyle
