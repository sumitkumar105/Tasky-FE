import "./App.css";
import { theme } from "./Themes/Themes";
import { Typography, Container, Box } from "@mui/material";
import Sidebar from "./Components/sidebar/Sidebar.js";
import Navbar from "./Components/Navbar/Navbar.js";
import CardComponent from "./Components/CardComponent";
function App() {
  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
      <Sidebar />
      <Box
        sx={{
          width: { lg: "80%", xs: "100%" },
          height: { lg: "100vh", xs: "100%" },
          backgroundColor: theme.palette.defualt,
        }}
      >
        <Navbar />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Box>
    </Box>
  );
}

export default App;
