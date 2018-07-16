const colors = {
  blue: "#007bff",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#28a745",
  teal: "#20c997",
  cyan: "hsl(188, 78 %, 41 %)",
  white: "#fff",
  gray: "#6c757d",
  grayDark: "#343a40",
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  info: "#17a2b8",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#343a40"
};

const breakpoints = {
  XS: "0",
  SM: "576px",
  MD: "768px",
  LG: "992px",
  XL: "1200px"
};

export const theme = {
  fonts: {
    roboto: "'Roboto', sans-serif"
  },
  weights: {
    light: 300,
    normal: 400,
    bold: 500
  },
  colors,
  breakpoints
};
