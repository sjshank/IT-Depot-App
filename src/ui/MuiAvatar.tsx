import { styled } from "@mui/material/styles";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import React from "react";

const CustomizedAvatar = styled(Avatar)(
  ({ theme }) => `
    color: ${theme.palette.antiFlashWhite.main};
    height:30px;
    width:30px;
    background:${theme.palette.primary.main};
    font-Weight:500;
    font-size: 1rem;
    border: 2px solid ${theme.palette.primary.main};
  `
);

const MuiAvatar = (avatarProps: AvatarProps) => {
  return <CustomizedAvatar>{avatarProps.children}</CustomizedAvatar>;
};

export default MuiAvatar;
