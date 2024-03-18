import { TypographyVariantsOptions } from "@mui/material";
import { NextFont } from "next/dist/compiled/@next/font";
import { Geologica } from "next/font/google";

export const geologica: NextFont = Geologica({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const CustomTypographyOptions: Partial<TypographyVariantsOptions> = {
  htmlFontSize: 15,
  fontFamily: geologica.style.fontFamily.concat(
    ", Helvetica, Arial, sans-serif"
  ),
  allVariants: {
    lineHeight: 1.5,
    accentColor: "auto",
    letterSpacing: 0.5,
  },
};

export default {
  typography: CustomTypographyOptions as Partial<TypographyVariantsOptions>,
};
