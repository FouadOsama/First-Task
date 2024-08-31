import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppRoutes from "../routes/AppRoutes.tsx";
import "./App.scss";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppRoutes />
    </LocalizationProvider>
  );
}

export default App;
