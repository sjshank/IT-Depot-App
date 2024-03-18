import { styled } from "@mui/material/styles";
import Slider, { SliderProps } from "@mui/material/Slider";
import React from "react";

const CustomizedSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  "&.Mui-disabled": {
    color: theme.palette.primary.light,
  },
}));

const MuiSlider = (sliderProps: SliderProps) => {
  return (
    <CustomizedSlider {...sliderProps}>{sliderProps.children}</CustomizedSlider>
  );
};
export default MuiSlider;
