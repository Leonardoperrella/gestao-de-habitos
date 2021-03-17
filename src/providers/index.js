import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import UserProvider from "./UserProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupsProvider>
        <HabitsProvider>{children}</HabitsProvider>
      </GroupsProvider>
    </UserProvider>
  );
};

export default Providers;
