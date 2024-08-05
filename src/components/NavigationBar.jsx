import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// NavigationBar component that renders the app's navigation bar
const NavigationBar = () => {
  return (
    <AppBar
      position="sticky" // Fixes the position of the AppBar at the top of the viewport
      sx={{
        backgroundColor: '#1e1e1e', // Sets the background color of the AppBar
        color: '#fff', // Sets the text color of the AppBar
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow below the AppBar
        borderBottom: '2px solid #333', // Adds a bottom border to the AppBar
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar>
        {/* App Title with enhanced styling */}
        <Typography
          variant="h5" // Sets the typography variant to h5
          sx={{
            flexGrow: 1, // Makes the title take up available space
            fontWeight: 'bold', // Makes the title text bold
            background: '-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Adds a gradient effect to the text
            WebkitBackgroundClip: 'text', // Clips the background to the text
            WebkitTextFillColor: 'transparent', // Makes the text color transparent to show the gradient
            fontSize: {
              xxs: '1.2rem', // More Smaller font size on extra-extra-small screens
              xs: '1.2rem', // Smaller font size on extra-small screens
              sm: '1.5rem', // Normal font size on small screens
              md: '1.8rem', // Larger font size on medium screens
              lg: '2rem', // Larger font size on large screens
            },
          }}
        >
          Weather App
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tabs
            value={false} // No tab is selected by default because routing is handled by React Router
            centered // Centers the tabs within the AppBar
            TabIndicatorProps={{
              style: {
                backgroundColor: '#fff', // Sets the color of the tab indicator
                height: '4px', // Sets the height of the tab indicator
              },
            }}
            sx={{
              '& .MuiTab-root': {
                minWidth: {
                  xxs: 60, // Minimum width for tabs on extra-extra small screens
                  xs: 80, // Minimum width for tabs on extra-small screens
                  sm: 100, // Minimum width for tabs on small screens
                  md: 120, // Minimum width for tabs on medium screens
                },
                color: '#fff', // Sets the text color of the tabs
                textTransform: 'none', // Disables text transformation (e.g., uppercase)
                fontWeight: 'bold', // Makes the tab text bold
                fontSize: {
                  xxs: '0.7rem', 
                  xs: '0.8rem', // Smaller font size on extra-small screens
                  sm: '0.9rem', // Normal font size on small screens
                  md: '1rem', // Larger font size on medium screens
                },
                transition: 'background-color 0.3s', // Adds a transition effect for background color changes
              },
              '& .MuiTab-root.Mui-selected': {
                color: '#fff', // Keeps the text color white when a tab is selected
              },
              '& .MuiTab-root:hover': {
                backgroundColor: '#333', // Changes the background color on hover
              },
            }}
          >
            {/* Tabs for navigation */}
            <Tab label="Current Weather" component={Link} to="/" />
            <Tab label="5 Day Forecast" component={Link} to="/fiveDayThreeHourForecast" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
