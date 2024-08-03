import { Box, Typography } from "@mui/material";

// Boxes containing weather info along with icons
const WeatherElementBox = ({ icon: IconComponent, label, value, isMobile }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        gap: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: "16px",
        boxShadow: 1,
        flexBasis: "calc(50% - 16px)", // Adjust the basis as needed
        minHeight: "100px", // Set a minimum height
        boxSizing: "border-box",
      }}
    >
      <IconComponent sx={{ color: "white", fontSize: isMobile ? "2rem" : "3rem" }} />
      <Typography variant={isMobile ? "body1" : "body3"} sx={{ color: "white" }}>
        {label}: {value}
      </Typography>
    </Box>
  );

export default WeatherElementBox;