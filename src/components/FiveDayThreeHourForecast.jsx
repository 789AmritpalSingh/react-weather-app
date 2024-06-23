import React from "react";
import useWeather from "./useWeather";
import SnackbarAlert from "./SnackbarAlert";
import ForecastWeatherDetails from "./ForecastWeatherDetails";

const FiveDayThreeHourForecast = () => {
  const {
    snackbarOpen,
    snackbarOpen1,
    snackbarMessage,
    snackbarMessage1,
    forecastWeatherData,
    options,
    isMobile,
    forecastBackgroundImage,
    setSnackbarOpen,
    setSnackbarOpen1,
    handleForecastSubmit,
    handleForecastKeyDown,
    handleInputChange,
    handleOptionsChange,
  } = useWeather();

  return (
    <>
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
      <ForecastWeatherDetails
        forecastWeatherData={forecastWeatherData}
        options={options}
        handleForecastSubmit={handleForecastSubmit}
        handleForecastKeyDown={handleForecastKeyDown}
        handleInputChange={handleInputChange}
        handleOptionsChange={handleOptionsChange}
        forecastBackgroundImage={forecastBackgroundImage}
      />
    </>
  );
};

export default FiveDayThreeHourForecast;
