import { TNotification } from "@/types/ticket";
import { useEffect, useState } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState<TNotification>({
    type: "info",
    messages: [],
  });
  useEffect(() => {
    if (notification.messages.length > 0) {
      const timer = setTimeout(() => {
        setNotification((notification) => ({
          ...notification,
          type: "info",
          messages: [],
        }));
      }, 2000);
      () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  return [notification, setNotification] as const;
};

export default useNotification;
