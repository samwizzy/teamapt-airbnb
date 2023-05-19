import BottomNavigation from "./BottomNavigation";
import Navigation from "./Navigation";

function AppBar() {
  return (
    <header className="contents">
      <Navigation />
      <BottomNavigation />
    </header>
  );
}

export default AppBar;
