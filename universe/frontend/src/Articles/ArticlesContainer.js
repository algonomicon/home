import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import FiltersContainer from './Filters/FiltersContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

const styles = {
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem'
  }),
  grid: () => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
    gridTemplateAreas: 
      `'nav nav'
       'main sidebar'`
  }),
  nav: () => ({
    gridArea: 'nav'
  }),
  main: () => ({
    gridArea: 'main',
    borderRight: '1px solid #ccc',
    paddingRight: '1.4rem'
  }),
  sidebar: () => ({
    gridArea: 'sidebar',
    paddingLeft: '1.4rem',
    maxHeight: '100%',
    overflow: 'hidden'
  }),
  heading: () => ({
    color: '#aaa',
    borderBottom: '1px solid #ccc',
    fontSize: '1.4rem',
    padding: '1.4rem 0',
    lineHeight: '1',
    fontFamily: 'monospace',
    display: 'block',
    textTransform: 'uppercase'
  })
}

const Wrapper = createComponent(styles.wrapper)
const Grid = createComponent(styles.grid)
const Nav = createComponent(styles.nav)
const Main = createComponent(styles.main)
const Sidebar = createComponent(styles.sidebar)
const Heading = createComponent(styles.heading, 'h3')

class ArticlesContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Nav>
            <CategoriesContainer />
          </Nav>
          <Main>
            <ShowcaseContainer />
          </Main>
          <Sidebar>
            <Heading>Filters</Heading>
            <FiltersContainer />
          </Sidebar>
        </Grid>
      </Wrapper>
    )
  }
}

export default ArticlesContainer