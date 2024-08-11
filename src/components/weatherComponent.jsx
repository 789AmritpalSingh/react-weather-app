import React from "react";
import { Box, Container, Grid } from "@mui/material";
import SnackbarAlert from "./SnackbarAlert";
import LeftWeatherCard from "./LeftWeatherCard";
import WeatherDetails from "./WeatherDetails";
import LocationPrompt from "./LocationPrompt";
import useWeather from "./useWeather";
import SearchBar from "./SearchBar";

// Main component responsible for rendering the weather app ui
const Weather = () => {
  const {
    parsedWeatherData,
    options,
    isLocationAllowed,
    isLocationBlocked,
    isMobile,
    weatherIconGIF,
    backgroundImage,
    snackbarOpen,
    snackbarMessage,
    snackbarOpen1,
    snackbarMessage1,
    setSnackbarOpen,
    setSnackbarOpen1,
    handleInputChange,
    handleOptionsChange,
    handleKeyDown,
    handleSubmit,
    setBackgroundImage,
  } = useWeather();

  // The rendering part of the Weather component
  return (
    <div
      style={{
        // For setting the background image for the whole page
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        // overflow: "hidden", // Prevent outer scrolling
      }}
    >
      <SnackbarAlert // Snackbar alert message if the weather details are not found for entered location.
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={() => setSnackbarOpen(false)}
        isMobile={isMobile}
      />
      <SnackbarAlert // Snackbar for alert message if the user has not entered anything in the search bar and try searching.
        open={snackbarOpen1}
        message={snackbarMessage1}
        onClose={() => setSnackbarOpen1(false)}
        isMobile={isMobile}
      />
      {!isLocationAllowed && ( // When the user has not allowed the location yet.
        <LocationPrompt
          weatherIconGIF={weatherIconGIF}
          isLocationBlocked={isLocationBlocked}
        />
      )}
      {isLocationAllowed && ( // when the user allows the location.
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {isMobile && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                position: "sticky",
                top: 50,
                zIndex: 1000,
              }}
            >
              <SearchBar
                options={options}
                handleInputChange={handleInputChange}
                handleOptionsChange={handleOptionsChange}
                handleKeyDown={handleKeyDown}
                handleSubmit={handleSubmit}
                isMobile={isMobile}
              />
            </Box>
          )}
          <Container maxWidth="lg" sx={{marginTop: isMobile ? "35px" : "70px"}}>
            <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
              <Grid item xs={12} md={6}>
                {/* Below is the left side card displaying weather data */}
                <LeftWeatherCard
                  parsedWeatherData={parsedWeatherData}
                  isMobile={isMobile}
                  backgroundImage={setBackgroundImage()}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Right side weather card containing detailed weather info and search bar */}
                <WeatherDetails
                  parsedWeatherData={parsedWeatherData}
                  isMobile={isMobile}
                  options={options}
                  handleInputChange={handleInputChange}
                  handleOptionsChange={handleOptionsChange}
                  handleKeyDown={handleKeyDown}
                  handleSubmit={handleSubmit}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Weather;
