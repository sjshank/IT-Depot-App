import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MuiPageHeader from "@/ui/MuiPageHeader";
import { Typography } from "@mui/material";

const WithFormLayout = (
  WrapperComponent: React.ElementType,
  props: any
): React.ElementType => {
  const { header, subHeader } = props;
  const ComponentWithFormLayout = (props: any) => {
    return (
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center" gap={1}>
          <MuiPageHeader
            sx={{
              textAlign: "center",
              textAlignLast: "center",
              ":-moz-text-align-last": "center",
            }}
          >
            {header}
          </MuiPageHeader>
          {subHeader && (
            <Typography
              variant="body2"
              color="#66666e"
              component="p"
              sx={{
                width: { md: "50%" },
                textAlignLast: "center",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {subHeader}
            </Typography>
          )}
          <WrapperComponent {...props} />
        </Stack>
      </Container>
    );
  };
  return ComponentWithFormLayout;
};

export default WithFormLayout;
