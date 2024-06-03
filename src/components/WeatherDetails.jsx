import React from "react";
import { Card, CardContent, Grid, Box, Typography } from "@mui/material";
import WeatherIcon from "./weatherIcons";
import WeatherElementBox from "./weatherElementBox";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto"; // For Feels like temperature
import ThermostatIcon from "@mui/icons-material/Thermostat"; // For Min Temperature
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WindPowerIcon from "@mui/icons-material/WindPower";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Brightness7, Compress, Loop, WbTwilight } from "@mui/icons-material";
import { convertDegreesToCompass, formatTime } from "./unitConverter";
import SearchBar from "./SearchBar";

// WeatherDetails component to display detailed weather information
const WeatherDetails = ({ parsedWeatherData, isMobile, options, handleInputChange, handleOptionsChange, handleKeyDown, handleSubmit }) => (
  <Card
    sx={{
      opacity: 0.9,
      padding: "20px",
      mt: 3,
      mb: 3,
      background: "#333",
      height: isMobile ? "auto" : "88vh",
      overflowY: isMobile ? "scroll" : "auto", // Ensure scrolling on mobile view
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensures the footer sticks to the bottom
        height: "100%", // Takes full height of the card
      }}
    >
      {parsedWeatherData && (
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            borderRadius: "12px", // Rounded corners for the box
          }}
        >
          <WeatherIcon type={parsedWeatherData.weather[0].main} />
          <Typography
            variant="body3"
            sx={{
              color: "white",
              ml: 2,
              fontSize: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {parsedWeatherData.weather[0].description.toUpperCase()}
          </Typography>
        </Box>
      )}
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex", // Set display to flex to use flexbox properties
            flexDirection: "column", // Stack children vertically
            justifyContent: "center", // Center the items vertically
            alignItems: "center", // Center the items horizontally
            height: "100%", // Take up full height of its container
            width: "100%", // Take up full width of its container
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
      </Grid>

      {parsedWeatherData && (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={ThermostatAutoIcon}
              label="Feels like"
              value={`${parsedWeatherData.main.feels_like}°C`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={Compress}
              label="Pressure"
              value={`${parsedWeatherData.main.pressure} hpa`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={() => (
                <ThermostatIcon sx={{ color: "skyblue", fontSize: "3rem" }} />
              )}
              label="Min Temp"
              value={`${parsedWeatherData.main.temp_min}°C`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={() => (
                <ThermostatIcon sx={{ color: "red", fontSize: "3rem" }} />
              )}
              label="Max Temp"
              value={`${parsedWeatherData.main.temp_max}°C`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={WaterDropIcon}
              label="Humidity"
              value={`${parsedWeatherData.main.humidity}%`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={WindPowerIcon}
              label="Wind Speed"
              value={`${(parsedWeatherData.wind.speed * 3.6).toFixed()} km/h`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={Loop}
              label="Wind Direction"
              value={`${convertDegreesToCompass(parsedWeatherData.wind.deg)}`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={VisibilityIcon}
              label="Visibility"
              value={`${parsedWeatherData.visibility}m`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <WeatherElementBox
              icon={Brightness7}
              label="Sunrise"
              value={`${formatTime(parsedWeatherData.sys.sunrise)}`}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ mb: 3 }}>
            <WeatherElementBox
              icon={WbTwilight}
              label="Sunset"
              value={`${formatTime(parsedWeatherData.sys.sunset)}`}
            />
          </Grid>
        </Grid>
      )}
    </CardContent>
  </Card>
);

export default WeatherDetails;
