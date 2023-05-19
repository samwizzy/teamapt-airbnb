import links from "../data/links";

function SideBarMenu() {
  return (
    <aside>
      <ul className="sidebar">
        {links.map((link) => (
          <li key={link.id} className="sidebar__item">
            <a href="/" className="sidebar__link">
              <span>{link.icon}</span>
              <span className="sidebar__text">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBarMenu;
