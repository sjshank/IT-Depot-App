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
        minHeight: 250,
        maxWidth: 400,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        "&::first-letter": {
          textTransform: "capitalize",
        },
      },
    },
  },
};

const CustomMuiComponents = {
  components: CustomMuiComponentOptions as Components,
};

export default CustomMuiComponents;
