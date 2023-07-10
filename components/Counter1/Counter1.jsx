/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
// import IconMinus from 'components/IconMinus/IconMinus';
// import IconPlus from 'components/IconPlus/IconPlus';

const Counter11 = styled('div')({
  border: `1px solid rgba(176, 176, 176, 1)`,
  boxSizing: `border-box`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `4px 8px`,
  overflow: `hidden`,
  height: 'auto',
  width: 'fit-content',
})

// const IconMinus1 = styled(IconMinus)(({ theme }) => ({
//   width: `24px`,
//   height: `24px`,
//   margin: `0px 0px 0px 10px`,
// }));

const IconButton1 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}))

const Q1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['Body 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 2'].fontWeight,
  fontSize: theme.typography['Typography']['Body 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 2'].textDecoration,
  textTransform: theme.typography['Typography']['Body 2'].textTransform,
  margin: `0px 0px 0px 10px`,
}))

// const IconPlus1 = styled(IconPlus)(({ theme }) => ({
//   width: `24px`,
//   height: `24px`,
//   margin: `0px 0px 0px 10px`,
// }));

const IconButton2 = styled(IconButton)(({ theme }) => ({
  margin: `0px 0px 0px 10px`,
}))

function Counter1(props) {
  return (
    <Counter11 className={props.className}>
      <IconButton1 size={'small'} color={'default'} disabled={false}>
        {/* <IconMinus1 /> */}
      </IconButton1>
      <Q1>{props.quantity}</Q1>
      <IconButton2 size={'small'} color={'default'} disabled={false}>
        {/* <IconPlus1 /> */}
      </IconButton2>
    </Counter11>
  )
}

export default Counter1