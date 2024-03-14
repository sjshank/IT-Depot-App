import React, { useCallback } from "react";
import { NextRouter, useRouter } from "next/router";
import WithFormLayout from "@/hoc/withFormLayout";
import Login from "./login";
import useNotification from "@/hooks/useNotification";

const LandingPage: React.FunctionComponent<{}> = (): JSX.Element => {
  const [notification, setNotification] = useNotification();
  const router: NextRouter = useRouter();

  const handleLogIn = useCallback(async (email: string | undefined) => {
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
        setNotification((notification) => ({
          ...notification,
          type: "error",
          messages: data.errors,
        }));
        return;
      }
      router.push("/dashboard");
    } catch (err: any) {
      console.log("----", err.message);
    }
  }, []);
  return <Login onSubmitAction={handleLogIn} notification={notification} />;
};

const StartingPage = WithFormLayout(LandingPage, {
  header: "Welcome to Next IT Garage !",
});

export default StartingPage;
