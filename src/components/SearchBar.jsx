import React from "react";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// SearchBar component for searching locations
const SearchBar = ({
  options,
  handleInputChange,
  handleOptionsChange,
  handleKeyDown,
  handleSubmit,
  isMobile,
}) => (
  <Autocomplete
    freeSolo
    disableClearable
    options={options?.map((option) => {
      return option;
    })}
    getOptionLabel={(option) =>
      typeof option === "string" ? option : option.label || ""
    }
    onInputChange={handleInputChange}
    onChange={handleOptionsChange}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search Location"
        margin="normal"
        variant="outlined"
        fullWidth
        InputProps={{
          ...params.InputProps,
          type: "search",
          style: {
            fontSize: "1rem",
            color: "white",
            backgroundColor: "black",
            borderRadius: "20px", // Increase the border radius
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <SearchIcon style={{ color: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: {
            fontSize: "1rem",
            backgroundColor: "black",
            color: "white",
          },
        }}
        style={{
          width: "100%",
          maxWidth: "100%",
          fontSize: "1.25rem",
        }}
        onKeyDown={handleKeyDown}
      />
    )}
    sx={{
      width: isMobile ? "70%" : "90%",
      margin: "0 auto",
    }}
  />
);

export default SearchBar;
