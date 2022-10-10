import { NavLink } from "@remix-run/react";

type Menu = {
  label: string;
  uri: string;
};

export default function DesktopNavigation(props: { menuItems: Menu[] }) {
  const menuItems = props?.menuItems;

  return (
    <ul className="hidden space-x-8 sm:flex">
      {menuItems.map((menu: Menu) => (
        <li key={menu.label}>
          <NavLink
            to={menu.uri}
            className="
                      relative
                      text-lg
                      font-medium
                      before:absolute
                      before:-bottom-3
                      before:left-1/2
                      before:h-2
                      before:w-2
                      before:-translate-x-1/2
                      before:rounded-full
                      before:bg-sage-400
                      before:opacity-0
                      before:transition-opacity
                      hover:before:opacity-100
                  "
          >
            {menu.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
