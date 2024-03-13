import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MuiPageHeader from "@/ui/MuiPageHeader";

const WithFormLayout = (
  WrapperComponent: React.ElementType,
  props: any
): React.ElementType => {
  const { header } = props;
  const ComponentWithFormLayout = (props: any) => {
    return (
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center" gap={3}>
          <MuiPageHeader
            sx={{
              textAlign: "center",
              textAlignLast: "center",
              ":-moz-text-align-last": "center",
            }}
          >
            {header}
          </MuiPageHeader>
          <WrapperComponent {...props} />
        </Stack>
      </Container>
    );
  };
  return ComponentWithFormLayout;
};

export default WithFormLayout;
