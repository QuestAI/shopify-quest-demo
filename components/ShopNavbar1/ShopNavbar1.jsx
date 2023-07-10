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
import { Badge, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
// import IconMenu2 from 'components/IconMenu2/IconMenu2';
// import IconSearch from 'components/IconSearch/IconSearch';
// import IconCart1 from 'components/IconCart1/IconCart1';
import IconCart1 from '@mui/icons-material/ShoppingBagOutlined'
import useShopNavbar1 from 'components/ShopNavbar1/useShopNavbar1'
import Popover from '@mui/material/Popover'
import Link from 'next/link'
import Cart1 from 'components/Cart1/Cart1'
const ScreenDesktopTypeQue = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  backgroundColor: theme.palette['Background']['Background'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height:
    data.currentVariant === 'ScreenTabletTypeQuest'
      ? `50px`
      : data.currentVariant === 'ScreenMobileTypeQuest'
      ? `52px`
      : `60px`,
  justifyContent:
    data.currentVariant === 'ScreenTabletTypeQuest' ? `center` : `flex-start`,
  alignItems:
    data.currentVariant === 'ScreenTabletTypeQuest' ? `center` : `flex-start`,
  padding:
    data.currentVariant === 'ScreenTabletTypeQuest'
      ? `2px 20px`
      : data.currentVariant === 'ScreenMobileTypeQuest'
      ? `2px 20px`
      : `6px 80px`,
  boxSizing: `border-box`,
}))

const Items = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
})

const Logo = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: 'pointer',
})

const SqueezLogo = styled('img')({
  height: `48px`,
  width: `119.64px`,
  margin: `0px`,
})

const MenuStructure = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `36px`,
  margin: `0px`,
})

const Items1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf:
    data.currentVariant === 'ScreenTabletTypeQuest' ? 'unset' : `stretch`,
  margin:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `0px 0px 0px 40px`
      : `0px`,
}))

const Drinks = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Overline'].fontStyle,
  fontFamily: theme.typography['Typography']['Overline'].fontFamily,
  fontWeight: theme.typography['Typography']['Overline'].fontWeight,
  fontSize: theme.typography['Typography']['Overline'].fontSize,
  letterSpacing: theme.typography['Typography']['Overline'].letterSpacing,
  lineHeight: theme.typography['Typography']['Overline'].lineHeight,
  textDecoration: theme.typography['Typography']['Overline'].textDecoration,
  textTransform: theme.typography['Typography']['Overline'].textTransform,
  margin: `0px`,
}))

const Recipes = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Overline'].fontStyle,
  fontFamily: theme.typography['Typography']['Overline'].fontFamily,
  fontWeight: theme.typography['Typography']['Overline'].fontWeight,
  fontSize: theme.typography['Typography']['Overline'].fontSize,
  letterSpacing: theme.typography['Typography']['Overline'].letterSpacing,
  lineHeight: theme.typography['Typography']['Overline'].lineHeight,
  textDecoration: theme.typography['Typography']['Overline'].textDecoration,
  textTransform: theme.typography['Typography']['Overline'].textTransform,
  margin: `0px 0px 0px 40px`,
  opacity:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `0.6000000238418579`
      : 'unset',
}))

const About = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `rgba(255, 255, 255, 1)`
      : theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Overline'].fontStyle,
  fontFamily: theme.typography['Typography']['Overline'].fontFamily,
  fontWeight: theme.typography['Typography']['Overline'].fontWeight,
  fontSize: theme.typography['Typography']['Overline'].fontSize,
  letterSpacing: theme.typography['Typography']['Overline'].letterSpacing,
  lineHeight: theme.typography['Typography']['Overline'].lineHeight,
  textDecoration: theme.typography['Typography']['Overline'].textDecoration,
  textTransform: theme.typography['Typography']['Overline'].textTransform,
  margin: `0px 0px 0px 40px`,
  opacity:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `0.6000000238418579`
      : 'unset',
}))

// const IconMenu21 = styled(IconMenu2)(({ theme }) => ({
//   width: `24px`,
//   height: `24px`,
//   margin: `0px 0px 0px 10px`,
// }));

const IconButton1 = styled(IconButton, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  margin:
    data.currentVariant === 'ScreenMobileTypeQuest'
      ? `0px`
      : `0px 0px 0px 40px`,
}))

const Buttons = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
})

// const IconSearch1 = styled(IconSearch)(({ theme }) => ({
//   width: `24px`,
//   height: `24px`,
//   margin: `0px 0px 0px 10px`,
// }));

const IconButton2 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}))

const IconCart11 = styled(IconCart1)(({ theme }) => ({
  width: `20px`,
  height: `20px`,
  // margin: `0px 0px 0px 10px`,
}))

const IconButton3 = styled(IconButton)(({ theme }) => ({
  margin: `0px 0px 0px 30px`,
}))

function ShopNavbar1(props) {
  const { data, fns } = useShopNavbar1(props)

  return (
    <ScreenDesktopTypeQue className={props.className} data={data}>
      <Items>
        <Logo>
          <Link
            href={{
              pathname: '/',
            }}
          >
            <SqueezLogo
              src={`assets/images/ShopNavbar1_Squeez_logo.png`}
              loading="lazy"
              alt={'Squeez logo'}
            />
          </Link>
        </Logo>
        <MenuStructure>
          {!(data.currentVariant === 'ScreenMobileTypeQuest') && (
            <Items1 data={data}>
              <Drinks data={data}>{`DRINKS`}</Drinks>
              <Recipes data={data}>{`RECIPES`}</Recipes>
              <About data={data}>{`ABOUT`}</About>
            </Items1>
          )}
          {data.currentVariant === 'ScreenMobileTypeQuest' && (
            <IconButton1
              size={'small'}
              color={'default'}
              disabled={false}
              data={data}
            >
              {/* <IconMenu21 /> */}
            </IconButton1>
          )}
        </MenuStructure>
        {!(data.currentVariant === 'ScreenMobileTypeQuest') && (
          <Buttons>
            <IconButton2 size={'small'} color={'default'} disabled={false}>
              {/* <IconSearch1 /> */}
            </IconButton2>
            <Badge badgeContent={props.cart?.length} color="primary">
              <IconButton3
                size={'small'}
                color={'default'}
                disabled={false}
                onClick={fns.handleClick}
              >
                <IconCart11 />
              </IconButton3>
            </Badge>
          </Buttons>
        )}
      </Items>
      <Popover
        id={data.id}
        open={data.open}
        anchorEl={data.anchorEl}
        onClose={fns.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Cart1 cart={props.cart} />
      </Popover>
    </ScreenDesktopTypeQue>
  )
}

export default ShopNavbar1