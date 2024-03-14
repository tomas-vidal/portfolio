import React from "react";

function ContactIcon(props: { className: string }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M16 18a4 4 0 00-8 0" />
      <path d="M15 11 A3 3 0 0 1 12 14 A3 3 0 0 1 9 11 A3 3 0 0 1 15 11 z" />
      <path d="M5 4 H19 A2 2 0 0 1 21 6 V20 A2 2 0 0 1 19 22 H5 A2 2 0 0 1 3 20 V6 A2 2 0 0 1 5 4 z" />
      <path d="M8 2v2M16 2v2" />
    </svg>
  );
}

export default ContactIcon;
