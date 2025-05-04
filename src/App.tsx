import "./App.css";
import Sidebar from "./components/Sidebar";
import { menuItems } from "./data/sidebarItems";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="screen-layout">
      <aside>
        <Sidebar menuItems={menuItems} />
      </aside>
      <main className="main-layout">
        <header>
          <div className="header-container">
            <h1>Dashboard</h1>
            <div className="profile">
              <img src="/assets/icons/logo.svg" alt="profile" />
            </div>
          </div>
        </header>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
