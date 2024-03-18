export const validateEmail = (email: string): string => {
  let errStr = "";
  if (!email) {
    errStr = "Email is required";
    return errStr;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errStr = "Enter a valid email address";
  }
  return errStr;
};

export const groupBy = (list: any[], key: string) => {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const populateTicketMetrics = (
  tickets: any[],
  ticketsGroupedByCategory: any
) => {
  return {
    ...tickets.reduce(
      (acc: any, curr: any) => {
        curr["status"] !== "done" ? acc["progress"]++ : acc["completed"]++;
        return acc;
      },
      {
        progress: 0,
        completed: 0,
      }
    ),
    numberOfTickets: tickets.length,
    categories: Object.keys(ticketsGroupedByCategory).sort(),
  };
};

export const unEscapeCharEntities = (str: string) => {
  return str
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
};
