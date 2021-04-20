export const Check = ({ className }) => (
  <svg
    className={className ?? "w-6 h-6"}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

Check.Selected = () => (
  <div className="absolute top-0 right-0 bg-green-500 h-4 w-4 -mt-1 -mr-1 flex items-center justify-center rounded-full">
    <Check className="w-3 h-4 text-gray-50"></Check>
  </div>
);
