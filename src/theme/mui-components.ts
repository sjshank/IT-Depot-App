import { Components } from "@mui/material";

const CustomMuiComponentOptions: Components = {
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
  MuiCard: {
    styleOverrides: {
      root: {
        minWidth: 300,
        maxWidth: 400,
      },
    },
  },
};

const CustomMuiComponents = {
  components: CustomMuiComponentOptions as Components,
};

export default CustomMuiComponents;
