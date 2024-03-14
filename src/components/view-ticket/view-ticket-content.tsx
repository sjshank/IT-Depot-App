import { TTicket } from "@/types/ticket";
import {
  Box,
  Divider,
  Rating,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import MuiSlider from "@/ui/MuiSlider";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const CustomizedTypograpghy = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    "&.MuiTypography-root": {
      color: theme.palette.text.secondary,
      textTransform: "capitalize",
      paddingLeft: theme.spacing(1),
    },
  })
);

const TicketContent = ({ ticket }: { ticket: TTicket }) => {
  return (
    <Stack divider={<Divider />} gap={2}>
      <Box>
        <Typography component="h6" variant="subtitle1">
          Description
        </Typography>
        <CustomizedTypograpghy variant="body2">
          {ticket.description}
        </CustomizedTypograpghy>
      </Box>
      <Box>
        <Stack
          direction={{ sm: "row" }}
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Category
            </Typography>
            <CustomizedTypograpghy variant="body2">
              {ticket.category}
            </CustomizedTypograpghy>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Progress
            </Typography>
            <MuiSlider
              defaultValue={Number(ticket.progress)}
              aria-label="progress"
              valueLabelDisplay="on"
              disabled={true}
              size="medium"
            />
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction={{ sm: "row" }}
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Status
            </Typography>
            <CustomizedTypograpghy
              variant="body2"
              display="inline-flex"
              color={`${ticket.status === "done" ? "#2e7d32 !important" : ""}`}
            >
              {ticket.status}
            </CustomizedTypograpghy>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Priority
            </Typography>
            <Rating
              name="priority"
              defaultValue={ticket.priority}
              readOnly
              precision={1}
              title={"" + ticket.priority}
              icon={
                <LocalFireDepartmentIcon
                  fontSize="small"
                  sx={{ color: "#E23D28" }}
                />
              }
              emptyIcon={<LocalFireDepartmentOutlinedIcon fontSize="small" />}
            />
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction={{ sm: "row" }}
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Assigned To
            </Typography>
            <CustomizedTypograpghy variant="body2" display="inline-flex">
              <AssignmentIndIcon fontSize="small" color="secondary" />
              {ticket.assignedTo}
            </CustomizedTypograpghy>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Submitted By
            </Typography>
            <CustomizedTypograpghy variant="body2" display="inline-flex">
              <AssignmentIndIcon fontSize="small" color="secondary" />
              {ticket.createdBy}
            </CustomizedTypograpghy>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TicketContent;
