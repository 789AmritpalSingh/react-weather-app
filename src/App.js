import { CssBaseline, GlobalStyles } from "@mui/material";
import React from 'react';
import Weather from "./components/weatherComponent";

const App = () => {
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
      <Weather />
    </>
  );
};

export default App;
