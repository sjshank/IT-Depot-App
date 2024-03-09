import { ThemeOptions, createTheme } from "@mui/material/styles";
import CustomPaletteOptions from "./palette";
import CustomTypographyOptions from "./typography";
import CustomMuiComponents from "./mui-components";

const CustomThemeOptions: Partial<ThemeOptions> = {
  ...CustomPaletteOptions,
  ...CustomTypographyOptions,
  ...CustomMuiComponents,
};

// Create a theme instance.
const theme: ThemeOptions = createTheme(CustomThemeOptions);

export default theme;
