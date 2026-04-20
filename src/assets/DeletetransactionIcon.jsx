import * as React from "react";
const DeleteTransactionIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={20} fill="none" {...props}>
    <path stroke="#E5E7EB" d="M12.25 20H0V0h12.25v20Z" />
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#4B5563"
          d="m3.697 3.234-.197.391H.875a.874.874 0 1 0 0 1.75h10.5a.874.874 0 1 0 0-1.75H8.75l-.197-.391a.871.871 0 0 0-.782-.484H4.48a.872.872 0 0 0-.782.484Zm7.678 3.016H.875l.58 9.27c.043.691.618 1.23 1.31 1.23h6.72c.692 0 1.267-.539 1.31-1.23l.58-9.27Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 2.75h12.25v14H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 2.75h12.25v14H0v-14Z" />
      </clipPath>
    </defs>
  </svg>
);
export default DeleteTransactionIcon;
