import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const NotFoundAlert = () => {
  return (
    <Grid item>
      <Stack justifyContent="center" alignItems="center">
        <Divider variant="fullWidth" sx={{ margin: 4, width: "100%" }} />
        <Typography
          role="alert"
          variant="body2"
          color="secondary"
          sx={{ margin: 2, color: "#c81d25" }}
        >
          No record found
        </Typography>
        <Link href="/ticket/create" role="link">
          <Fab color="primary" variant="extended">
            <AddIcon sx={{ mr: 1 }} />
            Report New Incident
          </Fab>
        </Link>
      </Stack>
    </Grid>
  );
};

export default NotFoundAlert;
