import Map from "./Map";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a2145",
    },
  },
});

const Home = () => {
  return (
    <div className="Home">
      <Map />
      <br />
      <div className="home.buttons">
        <ThemeProvider theme={theme}>
          <Link to="/events">
            <Button variant="contained" color="primary" className="HomeChoice">
              Find A Game
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="contained" className="HomeChoice">
              Create Event
            </Button>
          </Link>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Home;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   status: {
//     primary: "#0a2145",
//   },
// });
