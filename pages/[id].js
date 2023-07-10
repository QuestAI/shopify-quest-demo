import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import questTheme from 'QuestDesignSystem5LightTheme'
import LayoutProductPage1 from 'components/LayoutProductPage1/LayoutProductPage1'
import { useRouter } from 'next/router'

const Home = ({ cart, handleAddToCart }) => {
  const router = useRouter()
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <LayoutProductPage1
              id={router.query.id}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home
