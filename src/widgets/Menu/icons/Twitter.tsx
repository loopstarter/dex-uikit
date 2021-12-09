import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      {...props}
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_1:317" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_1:317)">
        <path d="M7.33286 17.6996H5.99087C5.67065 17.6595 5.34832 17.6322 5.0302 17.5816C3.85083 17.4009 2.7109 17.0205 1.65941 16.4566C1.4361 16.3365 1.2191 16.2017 1 16.0732C1.95646 16.1448 2.91814 16.0536 3.8441 15.8035C4.77415 15.5433 5.64439 15.1039 6.40589 14.51C5.63663 14.4848 4.89377 14.2234 4.27826 13.7613C3.66274 13.2992 3.20443 12.6588 2.96559 11.9271C3.50334 12.0157 4.05366 11.9913 4.58146 11.8555C2.43258 11.3119 1.58568 9.39901 1.68891 8.18553C2.18364 8.44589 2.73122 8.59 3.29003 8.60688C2.52577 8.07094 1.99031 7.26786 1.78942 6.35629C1.58854 5.44471 1.73685 4.49095 2.20505 3.68342C4.20435 6.03665 6.73455 7.33651 9.83567 7.54719C9.72042 6.94918 9.73551 6.33335 9.87992 5.74171C10.0884 4.98068 10.533 4.30545 11.1497 3.81327C11.7665 3.32109 12.5235 3.03736 13.3118 3.00294C13.8171 2.98271 14.3211 3.06694 14.7923 3.25037C15.2636 3.43379 15.6919 3.71246 16.0506 4.06895C16.0798 4.10353 16.1186 4.12862 16.1621 4.14101C16.2057 4.15339 16.2519 4.15251 16.2949 4.13848C17.0014 3.98333 17.6819 3.72718 18.3153 3.37794C18.3659 3.34845 18.4206 3.32528 18.5028 3.28525C18.2342 4.10505 17.6967 4.81022 16.9775 5.28665C17.6743 5.20336 18.3554 5.02031 19 4.74311C18.9537 4.81685 18.9326 4.85056 18.9094 4.88427C18.4637 5.53104 17.915 6.10038 17.2851 6.56966C17.2439 6.59575 17.2108 6.63286 17.1895 6.6768C17.1683 6.72073 17.1598 6.76974 17.165 6.81825C17.1941 7.60631 17.1233 8.39488 16.9543 9.16516C16.3539 11.9798 14.9319 14.2677 12.5576 15.9236C11.2515 16.8274 9.74426 17.398 8.16714 17.5858L7.33286 17.6996Z" fill="white" />
      </g>
    </Svg>
  );
};

export default Icon;
