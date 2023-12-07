import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import InfoHeader from "./components/InfoHeader"
import Articles from './components/Artcles'
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
width:60%;
margin: 40px auto 0 auto;
`

function App() {
  return (
    <Box className="App">
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
