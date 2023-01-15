import styled from 'styled-components'
import Image from 'next/image'

const TaskBarStyle = {
   Container: styled.span`
      cursor: default;
      background-color: silver;
      margin: 16px 0 0 0;
      position: static;
      bottom: 0;
      border-top: 2px outset #fff;
      z-index: 228;
      width: 100%;
      margin-right: 0px;
      position: absolute;
      bottom: 0;
      padding-left: 0px;
      margin-left: 0px;
   `,
   TaskBar: styled.footer`
      cursor: default;
      background-color: silver;
      margin: 16px 0 0 0;
      position: static;
      bottom: 0;
      border-top: 2px outset #fff;
      z-index: 228;
      width: 100%;
      margin-right: 0px;
      position: absolute;
      bottom: 0;
      padding-left: 0px;
      margin-left: 0px;
   `,
   StartButton: styled.div`
      cursor: default;
      display: inline-block;
      border: 1px outset #fff;
      padding: 0 0 0 2px;
      box-shadow: 1px 1px #000;
      margin-bottom: 2px;
      margin-left: 2px;
      font-size: 14px;
      font-weight: bold;
      padding: 3px;
      color: black;
   `,
   StartImage: styled(Image)`
      margin-bottom: 2px;
      max-height: 16px;
      margin-right: 3px;
   `,
   StartText: styled.span`
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0px;
      margin: 0px;
      padding: 0px;
      position: relative;
      max-width: 100%;
   `,
   Time: styled.span`
      color: #212529;
      margin-top: 2px;
      position: absolute;
      text-align: right;
      font-size: 14px;
      margin-right: 3px;
      right: 0;
      padding: 4px 5px 3px 5px;
      border: 2px inset;
   `,
}

export default TaskBarStyle
