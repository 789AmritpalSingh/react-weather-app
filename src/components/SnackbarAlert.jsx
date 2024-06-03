import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import ErrorIcon from "@mui/icons-material/Error";

// SnackbarAlert component to display error messages
const SnackbarAlert = ({ open, message, onClose, isMobile }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning the snackbar to top center
  >
    <Alert
      onClose={onClose}
      severity="error"
      sx={{
        width: isMobile ? "60%" : "100%",
        backgroundColor: "red",
        color: "white",
        fontSize: isMobile ? "1rem" : "1.2rem",
      }}
      iconMapping={{
        error: <ErrorIcon style={{ color: "white", fontSize: "2rem" }} />, // Customizing the error icon color
      }}
    >
      {message}
    </Alert>
  </Snackbar>
);

export default SnackbarAlert;
