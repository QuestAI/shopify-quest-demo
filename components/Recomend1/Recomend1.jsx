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
import { styled } from '@mui/material/styles'

const Recomend11 = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
})

const Image1 = styled('div', {
  shouldForwardProp: (prop) => !['image'].includes(prop.toString()),
})(({ image }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `152px`,
  margin: `0px`,
}))

const Description = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `8px 0px 0px 0px`,
})

const RoyalCrush = styled('div')(({ theme }) => ({
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
  alignSelf: `stretch`,
  margin: `0px`,
}))

const Q895 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['Subtitle 2'].fontStyle,
  fontFamily: theme.typography['Typography']['Subtitle 2'].fontFamily,
  fontWeight: theme.typography['Typography']['Subtitle 2'].fontWeight,
  fontSize: theme.typography['Typography']['Subtitle 2'].fontSize,
  letterSpacing: theme.typography['Typography']['Subtitle 2'].letterSpacing,
  lineHeight: theme.typography['Typography']['Subtitle 2'].lineHeight,
  textDecoration: theme.typography['Typography']['Subtitle 2'].textDecoration,
  textTransform: theme.typography['Typography']['Subtitle 2'].textTransform,
  margin: `2px 0px 0px 0px`,
}))

function Recomend1({ title, price, image, ...props }) {
  return (
    <Recomend11 className={props.className}>
      <Image1 image={image}></Image1>
      <Description>
        <RoyalCrush>{title}</RoyalCrush>
        <Q895>${price}</Q895>
      </Description>
    </Recomend11>
  )
}

export default Recomend1
