import MuiChip from "@/ui/MuiChip";
import type { AvatarProps, ChipProps } from "@mui/material";
import React from "react";

type TMetricItemProps = ChipProps & AvatarProps;

const TicketMetricItem = ({ label, avatar }: TMetricItemProps) => {
  return <MuiChip label={label} avatar={avatar} />;
};

export default TicketMetricItem;
