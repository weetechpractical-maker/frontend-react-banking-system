import * as React from "react";
const TotalBalanceIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} fill="none" {...props}>
    <path d="M16 20H0V0h16v20Z" />
    <path d="M16 18H0V2h16v16Z" />
    <path
      fill="#2563EB"
      d="M2 3C.897 3 0 3.897 0 5v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H2.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H14a.999.999 0 1 0 0-2H2Zm11 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
  </svg>
);
export default TotalBalanceIcon;
