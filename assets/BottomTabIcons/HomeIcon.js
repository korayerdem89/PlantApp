import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ color, width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 21}
    height={height ?? 22}
    viewBox="0 0 24 24"
  >
    <Path
      fill={color}
      d="M4.50093 2.04205H16.5086C16.4422 1.22912 15.949 0.785706 15.0385 0.785706H5.96158C5.06053 0.785706 4.55784 1.22912 4.50093 2.04205ZM2.56605 4.71179H18.4435C18.3107 3.83419 17.8554 3.33535 16.85 3.33535H4.15949C3.1541 3.33535 2.69884 3.83419 2.56605 4.71179ZM3.68525 21.3214H17.3148C19.2876 21.3214 20.3214 20.3238 20.3214 18.4207V9.11821C20.3214 7.21524 19.2876 6.21756 17.3148 6.21756H3.68525C1.70294 6.21756 0.678589 7.206 0.678589 9.11821V18.4207C0.678589 20.3238 1.70294 21.3214 3.68525 21.3214Z"
    />
  </Svg>
);

export default HomeIcon;
