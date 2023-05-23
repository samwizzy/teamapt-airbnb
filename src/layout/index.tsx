import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import SideBarMenu from "./SideBarMenu";
import { FilterFormDialog, StayDetailsDialog } from "../components";

function Layout() {
  return (
    <div>
      <AppBar />

      <div className="flex relative">
        <SideBarMenu />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>

      <FilterFormDialog />
      <StayDetailsDialog />
    </div>
  );
}

export default Layout;
