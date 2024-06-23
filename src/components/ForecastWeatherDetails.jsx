import React from "react";
import SearchBar from "./SearchBar";
import { Typography, Grid, Card, CardContent } from "@mui/material";

// This file contains the details of the forecast weather data i.e. 5 days 3 hour forecast
const ForecastWeatherDetails = ({ forecastWeatherData, options, handleForecastKeyDown, handleForecastSubmit, handleInputChange, handleOptionsChange, isMobile }) => {
  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleString();
  };

  return (
    <div style={{ padding: 16, backgroundColor: "#333", color: "#fff", marginLeft: 16, borderRadius: 8 }}>
      <SearchBar
        options={options}
        handleInputChange={handleInputChange}
        handleOptionsChange={handleOptionsChange}
        handleKeyDown={handleForecastKeyDown}
        handleSubmit={handleForecastSubmit}
        isMobile={isMobile}
      />
      {forecastWeatherData && forecastWeatherData.city && (
        <Typography variant="h4" gutterBottom style={{ color: "#ccc" }}>{forecastWeatherData.city.name}</Typography>
      )}
      {/* Display forecast data if available */}
      <Grid container spacing={2}>
        {forecastWeatherData && forecastWeatherData.list && forecastWeatherData.list.map((hour, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card style={{ backgroundColor: "#444", color: "#fff", borderRadius: 8 }}>
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
