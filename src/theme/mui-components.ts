import { Components } from "@mui/material";

const CustomMuiComponents: Components = {
  // Name of the component
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "0.85rem",
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
  MuiCard: {
    styleOverrides: {
      root: {
        minWidth: 300,
        maxWidth: 400,
      },
    },
  },
};

export default { components: CustomMuiComponents as Components };
