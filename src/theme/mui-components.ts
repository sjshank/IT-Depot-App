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
};

export default { components: CustomMuiComponents as Components };
