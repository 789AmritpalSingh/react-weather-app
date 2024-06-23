import React from "react";
import SearchBar from "./SearchBar";
import { Typography, Grid, Card, CardContent } from "@mui/material";

// This file contains the details of the forecast weather data i.e. 5 days 3 hour forecast
const ForecastWeatherDetails = ({
  forecastWeatherData,
  options,
  handleForecastKeyDown,
  handleForecastSubmit,
  handleInputChange,
  handleOptionsChange,
  isMobile,
  forecastBackgroundImage,
}) => {
  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleString();
  };

  return (
    <div
      style={{
        // For setting the background image for the whole page
        backgroundImage: `url(${forecastBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {forecastWeatherData && forecastWeatherData.city && (
          <Grid item>
            <Typography
              variant= {isMobile ? "h3" : "h4"}
              gutterBottom
              style={{
                color: "#fff",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                padding: "10px 20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                margin: '10px'
              }}
            >
              {forecastWeatherData.city.name}
            </Typography>
          </Grid>
        )}
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
      {/* Display forecast data if available */}
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {forecastWeatherData &&
          forecastWeatherData.list &&
          forecastWeatherData.list.map((hour, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="body2" style={{ color: "#bbb" }}>
                    {formatDate(hour.dt)}
                  </Typography>
                  <Typography variant="h6" style={{ color: "#fff" }}>
                    Temperature: {hour.main.temp}°C
                  </Typography>
                  <Typography variant="body1" style={{ color: "#eee" }}>
                    Weather: {hour.weather[0].description}
                  </Typography>
                  <Typography variant="body2" style={{ color: "#bbb" }}>
                    Wind: {hour.wind.speed} m/s
                  </Typography>
                  <Typography variant="body2" style={{ color: "#bbb" }}>
                    Humidity: {hour.main.humidity}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ForecastWeatherDetails;
