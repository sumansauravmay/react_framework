import { Container, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import FeaturedComponent from '../components/FeaturedComponent';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const Blog = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Container maxWidth="lg">
     <Header/>
     <FeaturedComponent/>
    </Container>
    </ThemeProvider>
  )
}

export default Blog
