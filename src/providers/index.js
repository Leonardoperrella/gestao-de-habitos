import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <GroupsProvider>
      <HabitsProvider>{children}</HabitsProvider>;
    </GroupsProvider>
  );
};

export default Providers;
