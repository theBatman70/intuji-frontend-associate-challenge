import Header from "./layout/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import { menuItems } from "./data/sidebarItems";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="screen-layout">
      <aside>
        <Sidebar menuItems={menuItems} />
      </aside>
      <main className="main-layout">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
