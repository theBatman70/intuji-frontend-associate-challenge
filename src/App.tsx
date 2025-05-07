import Header from "./layout/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import AppRoutes from "./routes/Routes";
import { sidebarNavItems } from "./data/sidebarItems";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="screen-layout">
        <aside>
          <Sidebar menuItems={sidebarNavItems} />
        </aside>
        <main className="main-layout">
          <Header />
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
