import { CssBaseline, GlobalStyles } from "@mui/material";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./components/weatherComponent";
import NavigationBar from "./components/NavigationBar";
import FourDayHourlyForecast from "./components/FourDayHourlyForecast";
import useWeather from "./components/useWeather";

const App = () => {
  const {
    isLocationAllowed
  } = useWeather();

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
          },
          html: {
            width: "100%",
            height: "100%",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }}
      />
      <Router>
        {isLocationAllowed && <NavigationBar />} {/* Only displaying the navigation bar if the user has allowed the location. */}
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/fourDayHourlyForecast" element={<FourDayHourlyForecast />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
