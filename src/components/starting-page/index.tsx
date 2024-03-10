import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailRounded from "@mui/icons-material/EmailRounded";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

const StartingPage: React.FunctionComponent<{}> = (): JSX.Element => {
  const router = useRouter();
  const handleEmailSubmitAction = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/tickets");
  };
  return (
    <Container sx={{ py: 4 }}>
      <Stack justifyContent="center" alignItems="center" gap={3}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={500}
          sx={{
            textAlign: "center",
            textAlignLast: "center",
          }}
        >
          Welcome to Next IT Garage !
        </Typography>
        <FormControl
          component="form"
          variant="standard"
          sx={{ width: { md: "50%" } }}
          onSubmit={handleEmailSubmitAction}
          noValidate
        >
          <TextField
            id="email-id-input"
            label="Email Id"
            size="medium"
            type="email"
            placeholder="Your email address"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRounded fontSize="large" />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ paddingBottom: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ my: 3, alignSelf: "center" }}
          >
            Proceed
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
};

export default StartingPage;
