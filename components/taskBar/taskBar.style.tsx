import Image from 'next/image'
import styled from 'styled-components'

const TaskBarStyle = {
   Container: styled.span`
      background-color: silver;
      border-top: 2px outset #fff;
      bottom: 0;
      bottom: 0;
      cursor: default;
      margin-left: 0px;
      margin-right: 0px;
      margin: 16px 0 0 0;
      padding-left: 0px;
      position: absolute;
      position: static;
      width: 100%;
      z-index: 228;
   `,
   TaskBar: styled.footer`
      background-color: silver;
      border-top: 2px outset #fff;
      bottom: 0;
      bottom: 0;
      cursor: default;
      margin-left: 0px;
      margin-right: 0px;
      margin: 16px 0 0 0;
      padding-left: 0px;
      position: absolute;
      position: static;
      width: 100%;
      z-index: 228;
   `,
   StartButton: styled.div`
      border: 1px outset #fff;
      box-shadow: 1px 1px #000;
      color: black;
      cursor: default;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 2px;
      margin-left: 2px;
      padding: 0 0 0 2px;
      padding: 3px;
   `,
   StartImage: styled(Image)`
      margin-bottom: 2px;
      margin-right: 3px;
      max-height: 16px;
   `,
   StartText: styled.span`
      background: none;
      border: 0px;
      box-sizing: border-box;
      display: inline-block;
      height: initial;
      margin: 0px;
      max-width: 100%;
      opacity: 1;
      overflow: hidden;
      padding: 0px;
      position: relative;
      width: initial;
   `,
   Time: styled.span`
      border: 2px inset;
      color: #212529;
      font-size: 14px;
      margin-right: 3px;
      margin-top: 2px;
      padding: 4px 5px 3px 5px;
      position: absolute;
      right: 0;
      text-align: right;
   `,
}

export default TaskBarStyle
