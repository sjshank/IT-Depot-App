import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { TTicket } from "@/types/ticket";
import Link from "next/link";

const TicketCard = ({
  title = "title",
  priority = 1,
  description = "Ticket description",
}: Partial<TTicket>) => {
  return (
    <Card variant="elevation">
      <CardContent sx={{ paddingBottom: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
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
          variant="caption"
          color="text.secondary"
          component="p"
          className="char-truncate"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href="/ticket/ticketId">
          <Button size="small" color="primary">
            View
          </Button>
        </Link>
        <Link href="/ticket/update/ticketId">
          <Button size="small" color="secondary">
            Update
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TicketCard;
