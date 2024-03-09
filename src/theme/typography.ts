import { TypographyVariantsOptions } from "@mui/material";
import { NextFont } from "next/dist/compiled/@next/font";
import { Geologica } from "next/font/google";

export const geologica: NextFont = Geologica({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  subsets: ["greek"],
  display: "auto",
  preload: true,
});

const CustomTypographyOptions: Partial<TypographyVariantsOptions> = {
  htmlFontSize: 15,
  fontFamily: geologica.style.fontFamily.concat(
    ", Helvetica, Arial, sans-serif"
  ),
  fontSize: 14,
  fontWeightRegular: "500",
  allVariants: {
    lineHeight: 1.5,
    accentColor: "auto",
    letterSpacing: 0.5,
  },
};

export default {
  typography: CustomTypographyOptions as Partial<TypographyVariantsOptions>,
};
