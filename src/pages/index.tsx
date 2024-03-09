import { NextPageWithLayout } from "@/layout";
import Button from "@mui/material/Button";
import WithPageLayout from "@/hoc/withPageLayout";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <p>Hello</p>
      <Button color="primary" variant="contained">
        Primary
      </Button>
    </>
  );
};

export default WithPageLayout(HomePage);
