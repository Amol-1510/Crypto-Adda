import {React} from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import { AppBar,Container,Toolbar,Typography,Select,MenuItem,createTheme,ThemeProvider } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles();

const Header = () => {

  const classes=useStyles();
  const {curr,setCurr} = CryptoState();
  
  const navigate=useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary:{
        main: "#fff",
      },
      mode: "dark",
    },
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
    <Container>
    <Toolbar>
      <Typography onClick={()=>navigate("/")}
      className={classes.title}
      style={{
      flex: 1,
      color:"gold",
      cursor:"pointer",
      fontWeight: "bold",
      fontSize: "400",
      fontStyle: "Montserrat"
      }}>
        Crypto Adda
      </Typography>
      <Select variant='outlined' 
      style={{
        width: 100,
        height: 40,
        marginRight: 15
        }} 
        value={curr} 
        onChange={(e) => {
          setCurr(e.target.value);
        }}
        >
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"INR"}>INR</MenuItem>
      </Select>
    </Toolbar>
    </Container>
    </AppBar>
    </ThemeProvider>
    <Outlet/>
    </>
  )
  }

export default Header;