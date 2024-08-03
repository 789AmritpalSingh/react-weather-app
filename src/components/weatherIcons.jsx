import React from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiDayHaze, WiDayThunderstorm, WiTornado } from "react-icons/wi";

const WeatherIcon = ({ type, isMobile }) => {
  const iconStyle = { fontSize: isMobile ? "6rem" : "8rem", color: "#fff" };
  const mistStyle = { fontSize: isMobile ? "6rem" : "8rem", color: "#ccc" }; // Lighter icon for mist
  const icons = {
    Clear: <WiDaySunny style={iconStyle} />,
    Clouds: <WiCloudy style={iconStyle} />,
    Rain: <WiRain style={iconStyle} />,
    Snow: <WiSnow style={iconStyle} />,
    Fog: <WiFog style={iconStyle} />,
    Haze: <WiDayHaze style={iconStyle} />,
    Thunderstorm: <WiDayThunderstorm style={iconStyle} />, 
    Mist: <WiFog style={mistStyle}/>,
    Tornado: <WiTornado style={iconStyle}/>
  };

  return <>{icons[type] || <WiDaySunny style={iconStyle} />}</>;
};

export default WeatherIcon;
