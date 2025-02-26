type ActionType = {
  id: number;
  name: string;
  comment?: string;
  deadline?: Date; // à afficher au format "17 Nov. 2024 @16h35"
  state: "todo" | "blocked" | "done";
};
const actions: ActionType[] = [
  {
    id: 1,
    name: "faire le ménage",
    state: "done",
  },
  {
    id: 2,
    name: "manger une Pomme",
    comment: "une granny",
    deadline: new Date(2025, 3, 5, 8, 25, 0, 0),
    state: "todo",
  },
];

export const HomePage = () => {
  return (
    <>
      My implementation here...
      <br />
      {JSON.stringify(actions)}
    </>
  );
};
