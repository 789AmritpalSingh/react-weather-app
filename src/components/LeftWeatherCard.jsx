import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import DigitalClock from "./digitalClock";

// WeatherCard component to display the main weather information. This contains a card having the background image with the weather data.
const LeftWeatherCard = ({ parsedWeatherData, isMobile, backgroundImage }) => (
  <Card // Left card component displaying cty, country, time, temperature and a background image
    sx={{
      opacity: 1,
      padding: isMobile ? "10px" : "20px",
      mt: 3,
      background: "black",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: isMobile ? "auto" : "88vh", // Ensure both cards have the same height
      mb: isMobile ? 1 : 0,
      flex: isMobile ? 1 : "none", // Ensure it takes up equal height in mobile view
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
      <Typography
        variant="h3"
        component="h2"
        sx={{ color: "white", mt: 2, textAlign: "right" }}
      >
        {parsedWeatherData?.name}
      </Typography>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: "white", textAlign: "right" }}
      >
        {parsedWeatherData?.sys.country}
      </Typography>
      {/* Footer for clock and temperature */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <DigitalClock timeZone={parsedWeatherData?.timezone} />
        {parsedWeatherData && (
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "white",
              textAlign: "right",
              mr: isMobile ? 1 : 2,
              fontSize: isMobile ? "2rem !important" : "3rem !important", // Adjust font size based on screen size
            }}
          >
            {parsedWeatherData.main.temp}°c
          </Typography>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default LeftWeatherCard;
