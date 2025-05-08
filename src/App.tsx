import Header from "./layout/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import AppRoutes from "./routes/Routes";
import { sidebarNavItems } from "./data/sidebarItems";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  // State to manage mobile sidebar visibility
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="screen-layout">
        <aside>
          <Sidebar
            menuItems={sidebarNavItems}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onClose={() => setIsMobileSidebarOpen(false)}
          />
        </aside>
        <main className="main-layout">
          <Header
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
