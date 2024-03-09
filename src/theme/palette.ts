import { PaletteOptions } from "@mui/material";
import { red } from "@mui/material/colors";
const CustomPaletteOptions: Partial<PaletteOptions> = {
  //override default app background
  background: {
    default: "#F2F3F4",
  },
  //set default app mode
  mode: "light",
  //override default primary, secondary, error hex code
  primary: {
    main: "#C34A36",
  },
  secondary: {
    main: "#334B48",
  },
  error: {
    main: red.A400,
  },
};

export default { palette: CustomPaletteOptions as Partial<PaletteOptions> };
