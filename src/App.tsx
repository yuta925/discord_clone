import "./App.scss";
import Sidebar from "./components/sideBar/Sidebar";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
