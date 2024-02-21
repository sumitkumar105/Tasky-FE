import "./App.css";
import { Box } from "@mui/material";
import Dashboard from "./Components/Dashboard/Dashbord";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Routes/Routing";
function App() {
  return (
    <Box>
      {/* <Dashboard /> */}

      <Routing />
    </Box>
  );
}

export default App;
