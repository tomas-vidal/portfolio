function EducationIcon(props: { className: string }) {
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
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M22 9L12 5 2 9l10 4 10-4v6" />
      <path d="M6 10.6V16a6 3 0 0012 0v-5.4" />
    </svg>
  );
}

export default EducationIcon;
