import '../styles/globals.css'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = React.useState([])

  React.useEffect(() => {
    const storedItems = localStorage.getItem('items')
    if (storedItems) {
      setCart(JSON.parse(storedItems))
    }
  }, [])

  const handleAddToCart = (product) => {
    const items = JSON.parse(localStorage.getItem('items') ?? '[]')
    items.push(product)
    localStorage.setItem('items', JSON.stringify(items))
    setCart(items)
  }

  return (
    <Component {...pageProps} cart={cart} handleAddToCart={handleAddToCart} />
  )
}

export default MyApp
