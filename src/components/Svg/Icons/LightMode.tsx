import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <circle cx="14" cy="14" r="14" fill="#657EEC"/>
      <g clip-path="url(#clip0)">
      <path d="M12.7825 6.3411C12.8716 6.4494 12.9262 6.58193 12.9392 6.72158C12.9522 6.86123 12.9231 7.00158 12.8555 7.12449C12.3276 8.09366 12.052 9.18002 12.0539 10.2836C12.0539 13.955 15.0468 16.9278 18.7355 16.9278C19.2167 16.9278 19.6851 16.8776 20.1352 16.7817C20.2732 16.7519 20.4169 16.7633 20.5484 16.8146C20.68 16.8659 20.7935 16.9548 20.8748 17.0703C20.9606 17.1903 21.0043 17.3353 20.9992 17.4828C20.9941 17.6302 20.9404 17.7718 20.8465 17.8856C20.1303 18.7653 19.2269 19.474 18.2021 19.9602C17.1773 20.4464 16.0569 20.6978 14.9226 20.696C10.7135 20.696 7.3042 17.3049 7.3042 13.1268C7.3042 9.98231 9.23437 7.28518 11.9826 6.14205C12.1195 6.0842 12.2715 6.07232 12.4157 6.10821C12.56 6.1441 12.6886 6.22582 12.7825 6.3411Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="14.6087" height="14.6087" fill="white" transform="translate(7.3042 6.08691)"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
