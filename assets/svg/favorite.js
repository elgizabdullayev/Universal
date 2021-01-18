
import React from "react";
import Svg, {Path} from 'react-native-svg';


export function Favorite() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512.38 512.38"
    >
      <Path
        fill="#ffda2d"
        d="M512.38 198.672l-177.023-25.723-79.167-160.41-79.167 160.41L0 198.672l128.095 124.862-30.239 176.307L256.19 416.6l158.334 83.241-30.239-176.308z"
      ></Path>
      <Path
        fill="#fdbf00"
        d="M414.524 499.841l-30.239-176.307L512.38 198.672l-177.023-25.723-79.167-160.41V416.6z"
      ></Path>
    </Svg>
  );
}

