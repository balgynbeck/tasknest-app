import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";

import { tasks } from "./data/tasks";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <MainDashboard tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
