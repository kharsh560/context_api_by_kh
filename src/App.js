import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import "./index.css";

function App() {
  return (
    <UserContextProvider>
      <div className=" bg-sky-800 h-screen flex flex-col items-center justify-center font-medium">
        <h1 className=" font-bold text-7xl text-lime-300">LacasaDePapel</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
