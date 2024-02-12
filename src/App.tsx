
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'
function App() {
  

  return (
    <>
    <Grid
      templateAreas={{
        base: `"nav" "main"`, 
        lg: `"nav nav" "aside main"`,
      }}
    >
    <GridItem pl='2' bg='orange.300' gridArea={'nav'}>
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem pl='2' bg='pink.300' gridArea={'aside'}>
        Aside
      </GridItem>
    </Show>
    <GridItem pl='2' bg='green.300' gridArea={'main'}>
      Main
    </GridItem>
  </Grid>
   
    </>
  )
}

export default App
