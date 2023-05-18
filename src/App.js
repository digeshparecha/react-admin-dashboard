import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { ColorModeContext, themeSettings, useMode } from "./theme";
import TopBar from './scenes/global/TopBar';
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoices"
import Form from "./scenes/form";
import Calendar from "./scenes/calendar"
import Line from "./scenes/line";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
      
  );
}

export default App;
