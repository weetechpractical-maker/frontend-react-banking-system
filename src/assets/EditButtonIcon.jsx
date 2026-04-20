import * as React from "react";
const EditButtonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={20} fill="none" {...props}>
    <path stroke="#E5E7EB" d="M14 20H0V0h14v20Z" />
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#4B5563"
          d="M12.895 3.343a1.53 1.53 0 0 0-2.165 0l-.823.82 2.677 2.678.823-.823a1.53 1.53 0 0 0 0-2.166l-.512-.509ZM4.715 9.36a1.51 1.51 0 0 0-.37.599l-.81 2.428a.66.66 0 0 0 .16.673.651.651 0 0 0 .672.158l2.428-.81a1.55 1.55 0 0 0 .599-.368l4.574-4.578-2.68-2.68L4.715 9.36ZM2.624 4.5A2.626 2.626 0 0 0 0 7.125v7a2.626 2.626 0 0 0 2.625 2.625h7a2.626 2.626 0 0 0 2.625-2.625V11.5a.874.874 0 1 0-1.75 0v2.625a.874.874 0 0 1-.875.875h-7a.874.874 0 0 1-.875-.875v-7c0-.484.391-.875.875-.875H5.25a.874.874 0 1 0 0-1.75H2.625Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 2.75h14v14H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 2.75h14v14H0v-14Z" />
      </clipPath>
    </defs>
  </svg>
);
export default EditButtonIcon;
