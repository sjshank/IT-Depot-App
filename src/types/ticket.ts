type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type TTicket = {
  title: string;
  priority: Range<1, 6>;
  description: string;
  category: string;
  //   ticketId: number;
  // status: "Not Started" | "Started" | "Done"
  // progress: number;
  // createdOn: string;
};
