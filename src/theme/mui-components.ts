import { Components } from "@mui/material";

const CustomMuiComponents: Components = {
  // Name of the component
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "1rem",
        letterSpacing: 1,
        fontWeight: 600,
        borderRadius: 6,
        minHeight: 40,
        width: "auto",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: "#FF7518",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      placeholder: "Enter your value",
    },
  },
};

export default { components: CustomMuiComponents as Components };
