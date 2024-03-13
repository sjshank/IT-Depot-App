import React, { useCallback } from "react";
import { NextRouter, useRouter } from "next/router";
import { toast } from "react-toastify";
import WithFormLayout from "@/hoc/withFormLayout";
import Login from "./login";

const LandingPage: React.FunctionComponent<{}> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const handleSignInAction = useCallback(async (email: string | undefined) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status !== "Success") {
        data.errors.forEach((error: string) =>
          toast.error(error, { theme: "dark" })
        );
        return;
      }
      router.push("/dashboard");
    } catch (err: any) {
      console.log("----", err.message);
    }
  }, []);
  return <Login onSubmitAction={handleSignInAction} />;
};

const StartingPage = WithFormLayout(LandingPage, {
  header: "Welcome to Next IT Garage !",
});

export default StartingPage;
