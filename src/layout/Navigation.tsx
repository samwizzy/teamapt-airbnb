import logo from "/airbnb.svg";

function Navigation() {
  return (
    <nav className="h-18 relative z-20 bg-white border-b" aria-label="primary">
      <div className="px-8 flex items-center justify-between">
        <img className="h-8 w-auto" src={logo} alt="logo" />

        <ul className="flex gap-x-10">
          <li>
            <a href="http://" className="navlink">
              Stays
            </a>
          </li>
          <li>
            <a href="http://" className="navlink">
              Experiences
            </a>
          </li>
          <li>
            <a href="http://" className="navlink">
              Online Experiences
            </a>
          </li>
        </ul>

        <div className="w-10 h-10 rounded-full border overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
