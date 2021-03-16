import Routes from "./routes";
import GlobalStyles from "./components/GlobalStyle";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
