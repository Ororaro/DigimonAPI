import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import Store from "./store/Store";
import Header from '../src/Layout/Header'
import DigiDetail from "./components/DigiDetail/DigiDetail";
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import { Typography } from "@mui/material";
function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Typography variant="h1" sx={{ paddingTop: '4rem', textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '10px' }}>DAPI API</Typography>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Lists/:id" element={<DigiDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
