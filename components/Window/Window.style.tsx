import styled from 'styled-components'
const WindowStyle = {
   Container: styled.div`
      background: silver;
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey,
      cursor: default;
      display: inline-block;
      inset 2px 2px #fff;
      padding: 3px;
      position: absolute;
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
      background: silver;
      border-radius: 0;
      border: none;
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
         inset 2px 2px #dfdfdf;
      margin: 0 0 0 2px;
      min-height: 14px;
      min-width: 16px;
      padding: 0;
      text-align: center;
   `,
   Body: styled.div`
      display: block;
      margin: 8px;
   `,
   Icon: styled.img``,
}

export default WindowStyle
