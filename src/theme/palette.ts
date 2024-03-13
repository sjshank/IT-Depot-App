import { PaletteOptions } from "@mui/material";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    pumpkin: Palette["primary"];
    antiFlashWhite: Palette["primary"];
  }

  interface PaletteOptions {
    pumpkin?: PaletteOptions["primary"];
    antiFlashWhite?: PaletteOptions["primary"];
  }
}

const CustomPaletteOptions: Partial<PaletteOptions> = {
  //override default app background
  background: {
    default: "#F2F3F4",
  },
  //set default app mode
  mode: "light",
  //override default primary, secondary, error hex code
  primary: {
    main: "#663399",
  },
  secondary: {
    main: "#403d39",
  },
  error: {
    main: "#FF3333",
  },
  text: {
    primary: "#1B1B1B",
    secondary: "#66666e",
  },
  pumpkin: {
    main: "#FF7518",
  },
  antiFlashWhite: {
    main: "#F2F3F4",
  },
};

export default { palette: CustomPaletteOptions as Partial<PaletteOptions> };
