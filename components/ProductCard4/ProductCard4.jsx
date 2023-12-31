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
import Link from 'next/link'
const TypeQuest = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  cursor: 'pointer',
})

const Pic = styled('div', {
  shouldForwardProp: (prop) => !['imageSrc'].includes(prop.toString()),
})(({ imageSrc }) => ({
  backgroundImage: `url(${imageSrc})`,
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
  height: `467.54px`,
  margin: `0px`,
}))

const About = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `17.001415252685547px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
})

const AboutProduct = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
})

const Text = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px 12px 8.500707626342773px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  height: `35.5px`,
  margin: `0px`,
})

const Product = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['H6'].fontStyle,
  fontFamily: theme.typography['Typography']['H6'].fontFamily,
  fontWeight: theme.typography['Typography']['H6'].fontWeight,
  fontSize: theme.typography['Typography']['H6'].fontSize,
  letterSpacing: theme.typography['Typography']['H6'].letterSpacing,
  lineHeight: theme.typography['Typography']['H6'].lineHeight,
  textDecoration: theme.typography['Typography']['H6'].textDecoration,
  textTransform: theme.typography['Typography']['H6'].textTransform,
  alignSelf: `stretch`,
  height: `27px`,
  margin: `0px`,
}))

const Price = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 8.500707626342773px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
})

const Product1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `0px`,
}))

function ProductCard4({ title, price, imageSrc, id, ...props }) {
  return (
    <Link
      href={{
        pathname: '/[id]',
        query: { id: id.slice(-13) },
      }}
    >
      <TypeQuest className={props.className}>
        <Pic imageSrc={imageSrc}></Pic>
        <About>
          <AboutProduct>
            <Text>
              <Product>{title}</Product>
            </Text>
            <Price>
              <Product1>${price}</Product1>
            </Price>
          </AboutProduct>
        </About>
      </TypeQuest>
    </Link>
  )
}

export default ProductCard4
