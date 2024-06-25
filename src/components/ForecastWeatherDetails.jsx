import React from "react";
import SearchBar from "./SearchBar";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import WeatherIcon from "./weatherIcons";

// ForecastWeatherDetails component - displays detailed forecast weather data
const ForecastWeatherDetails = ({
  forecastWeatherData,  // Forecast weather data
  options,              // Options for the search bar
  handleForecastKeyDown, // Handler for key down events in the search bar
  handleForecastSubmit,  // Handler for form submit in the search bar
  handleInputChange,     // Handler for input change in the search bar
  handleOptionsChange,   // Handler for changing options in the search bar
  isMobile,              // Flag to check if the device is mobile
  forecastBackgroundImage // Background image for the forecast section
}) => {
  
  // Function to format Unix timestamp to a readable date string
  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleString();
  };

  return (
    <div
      style={{
        // Setting the background image for the whole page
        backgroundImage: `url(${forecastBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Gradient overlay to enhance readability of content over background */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
          zIndex: -1,
        }}
      ></div> */}

      {/* Grid container for city name and search bar */}
      <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
        {forecastWeatherData && forecastWeatherData.city && (
          <Grid item>
            {/* Display city name and country */}
            <Typography
              variant={isMobile ? "h3" : "h4"}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                padding: "10px 20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                margin: "10px",
                zIndex: 2,
              }}
            >
              {forecastWeatherData.city.name}, {forecastWeatherData.city.country}
            </Typography>
          </Grid>
        )}
        
        {/* Search bar for searching different locations */}
        <Grid item xs={12} sm={6} container justifyContent="flex-end">
          <SearchBar
            options={options}
            handleInputChange={handleInputChange}
            handleOptionsChange={handleOptionsChange}
            handleKeyDown={handleForecastKeyDown}
            handleSubmit={handleForecastSubmit}
            isMobile={isMobile}
          />
        </Grid>
      </Grid>

      {/* Grid container for displaying forecast data */}
      <Grid container spacing={2} sx={{ marginTop: "20px", zIndex: 2 }}>
        {forecastWeatherData &&
          forecastWeatherData.list &&
          forecastWeatherData.list.map((hour, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {/* Card for each forecast item */}
              <Card
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "#fff",
                  borderRadius: 2,
                  padding: "10px",
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={8}>
                      {/* Display formatted date and time */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        {formatDate(hour.dt)}
                      </Typography>
                      {/* Display temperature */}
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        Temperature: {hour.main.temp}°C
                      </Typography>
                      {/* Display weather description */}
                      <Typography variant="body1" sx={{ color: "#eee" }}>
                        Weather: {hour.weather[0].description}
                      </Typography>
                      {/* Display wind speed */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        Wind: {hour.wind.speed} m/s
                      </Typography>
                      {/* Display humidity */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        Humidity: {hour.main.humidity}%
                      </Typography>
                      {/* Display minimum temperature */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        Min Temp: {hour.main.temp_min}°C
                      </Typography>
                      {/* Display maximum temperature */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        Max Temp: {hour.main.temp_max}°C
                      </Typography>
                      {/* Display feels like temperature */}
                      <Typography variant="body2" sx={{ color: "#bbb" }}>
                        Feels like: {hour.main.feels_like}°C
                      </Typography>
                    </Grid>
                    {/* Weather icon */}
                    <Grid item xs={4}>
                      <WeatherIcon type={hour.weather[0].main} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ForecastWeatherDetails;
