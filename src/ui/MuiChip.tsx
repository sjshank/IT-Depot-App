import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const CustomizedChip = styled(Chip)(
  ({ theme }) => `
    color: ${theme.palette.antiFlashWhite.main};
    height: 45px;
    width:175px;
    padding:6px;
    background:${theme.palette.pumpkin.main};
    font-Weight:500;
    font-size: 1rem;
    margin-right:20px;
    border: 2px solid ${theme.palette.pumpkin.main};
    cursor:default;
    box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
  
    :hover {
      color:${theme.palette.primary.main};
      background: ${theme.palette.antiFlashWhite.main};
    }
  `
);

const MuiChip = ({ label, avatar }: ChipProps) => {
  return <CustomizedChip variant="outlined" avatar={avatar} label={label} />;
};

export default MuiChip;
