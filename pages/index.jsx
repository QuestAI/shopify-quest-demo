import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import questTheme from 'QuestDesignSystem5LightTheme'
import LayoutProductList1Comp from 'components/LayoutProductList1/LayoutProductList1'

const Home = ({ handleAddToCart, cart }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <LayoutProductList1Comp
              handleAddToCart={handleAddToCart}
              cart={cart}
            />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home
