import React, { useCallback } from "react";
import { NextRouter, useRouter } from "next/router";
import WithFormLayout from "@/hoc/withFormLayout";
import Login from "./login";
import useNotification from "@/hooks/useNotification";
import { signIn } from "next-auth/react";

const LandingPage: React.FunctionComponent<{}> = (): JSX.Element => {
  const [notification, setNotification] = useNotification();
  const router: NextRouter = useRouter();

  const handleLogIn = useCallback(async (email: string | undefined) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: JSON.stringify(email),
      });
      if (!result?.ok && result?.status === 401) {
        setNotification((notification) => ({
          ...notification,
          type: "error",
          messages: ["Login failed. Incorrect e-mail address."],
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
  subHeader:
    "IT Garage platform as software offers workflow management that enables organizations to manage incident problems related with access control, hardware, project & software.",
});

export default StartingPage;
