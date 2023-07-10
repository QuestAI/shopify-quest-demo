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
import ShopNavbar1 from 'components/ShopNavbar1/ShopNavbar1'
import PromoBanner1 from 'components/PromoBanner1/PromoBanner1'
import ProductListRow1 from 'components/ProductListRow1/ProductListRow1'
import ShoppingFooter1 from 'components/ShoppingFooter1/ShoppingFooter1'
import useLayoutProductList1 from 'components/LayoutProductList1/useLayoutProductList1'
import shopify from '../../services/shopify'
const ScreenDesktop = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
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
})

const ShopNavbar11 = styled(ShopNavbar1, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  height:
    data.currentVariant === 'ScreenTablet'
      ? `50px`
      : data.currentVariant === 'ScreenMobile'
      ? 'unset'
      : `60px`,
  margin: `0px`,
}))

const PromoBanner11 = styled(PromoBanner1)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
}))

const ProductListRow11 = styled(ProductListRow1)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
}))

const ShoppingFooter11 = styled(ShoppingFooter1)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
}))

function LayoutProductList1(props) {
  const { data, fns } = useLayoutProductList1()

  return (
    <ScreenDesktop className={props.className}>
      <ShopNavbar11 data={data} cart={props.cart} />
      <PromoBanner11 />
      <ProductListRow11 data={data} handleAddToCart={fns.handleAddToCart} />
      <ShoppingFooter11 data={data} />
    </ScreenDesktop>
  )
}

export default LayoutProductList1