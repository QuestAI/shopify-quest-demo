import { useMemo } from 'react'

export const useCart1 = (props) => {
  const groupedCart = useMemo(() => {
    const finalArray = []
    props.cart.forEach((el) => {
      const found = finalArray.find((element) => element.id === el.id)
      if (found) {
        found.quantity++
      } else {
        finalArray.push({
          ...el,
          quantity: 1,
        })
      }
    })
    return finalArray
  }, [props.cart])
  let data = { groupedCart }
  let fns = {}

  return { data, fns }
}
