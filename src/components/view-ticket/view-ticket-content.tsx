import { TTicket } from "@/types/ticket";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import MuiSlider from "@/ui/MuiSlider";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { unEscapeCharEntities } from "@/utils/helper";

const CustomizedTypograpghy = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    "&.MuiTypography-root": {
      color: theme.palette.text.secondary,
      "&::first-letter": {
        textTransform: "capitalize",
      },
      paddingLeft: theme.spacing(1),
    },
  })
);

const TicketContent: React.FunctionComponent<{ ticket: TTicket }> = ({
  ticket,
}: {
  ticket: TTicket;
}): JSX.Element => {
  return (
    <Stack divider={<Divider />} gap={2}>
      <Box>
        <Typography component="h6" variant="subtitle1">
          Description
        </Typography>
        <CustomizedTypograpghy variant="body2">
          {unEscapeCharEntities(ticket.description)}
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
            <CustomizedTypograpghy
              variant="body2"
              display="inline-flex"
              gap={0.5}
            >
              <AssignmentIndIcon fontSize="small" color="secondary" />
              {ticket.assignedTo}
            </CustomizedTypograpghy>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography component="h6" variant="subtitle1">
              Submitted By
            </Typography>
            <CustomizedTypograpghy
              variant="body2"
              display="inline-flex"
              gap={0.5}
            >
              <AssignmentIndIcon fontSize="small" color="secondary" />
              {ticket.createdBy}
            </CustomizedTypograpghy>
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
              Created On
            </Typography>
            <CustomizedTypograpghy
              variant="body2"
              display="inline-flex"
              gap={0.5}
            >
              <DateRangeIcon fontSize="small" color="secondary" />
              {ticket.createdOn}
            </CustomizedTypograpghy>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TicketContent;
