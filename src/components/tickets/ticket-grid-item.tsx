import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { TTicket } from "@/types/ticket";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MuiSlider from "@/ui/MuiSlider";
import TicketCardActions from "./ticket-card-actions";
import { TicketContext } from "@/context/ticket-context";

const TicketGridItem = (ticket: TTicket) => {
  const {
    title,
    description,
    priority,
    progress,
    status,
    ticketId,
    assignedTo,
  } = ticket;
  const { showTicketViewModal } = useContext(TicketContext);
  const handleViewTicketModalAction = () => {
    showTicketViewModal(ticket);
  };
  return (
    <Grid item>
      <Card variant="elevation">
        <CardContent component="summary" sx={{ paddingBottom: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            sx={{ textTransform: "capitalize" }}
          >
            {title}
          </Typography>
          <Rating
            name="priority"
            defaultValue={priority}
            readOnly
            precision={1}
            icon={
              <LocalFireDepartmentIcon
                fontSize="small"
                sx={{ color: "#E23D28" }}
              />
            }
            emptyIcon={<LocalFireDepartmentOutlinedIcon fontSize="small" />}
          />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="p"
            className="char-truncate"
          >
            {description}
          </Typography>
          <MuiSlider
            defaultValue={Number(progress)}
            aria-label="progress"
            valueLabelDisplay="auto"
            disabled={true}
            size="medium"
          />
          <Box display="inline-flex" component="div" gap={0.5}>
            <AssignmentIndIcon fontSize="medium" color="secondary" />
            <Typography variant="subtitle2" component="span" color="secondary">
              {assignedTo}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Chip
              color={`${status === "done" ? "success" : "primary"}`}
              sx={{
                textTransform: "capitalize",
              }}
              label={status}
            />
          </div>
          <div>
            <TicketCardActions
              id={ticketId}
              status={status}
              onViewTicketModal={handleViewTicketModalAction}
            />
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TicketGridItem;
