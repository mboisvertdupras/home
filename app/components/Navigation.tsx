import { NavLink } from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

type Menu = {
  label: string;
  uri: string;
}

export async function getMenuItems() {
  const res = await client.query({
    query: gql`
      {
        menu(id: "Main menu", idType: NAME) {
          menuItems {
            nodes {
              uri
              label
            }
          }
        }
      }
    `,
  });

  if (res.errors) {
    throw new Error(res.errors[0].message);
  }

  return res.data.menu.menuItems.nodes;
}

export default function Navigation() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenuItems().then((items) => setMenuItems(items));
  })
  
  return (
    <nav className="fixed top-0 z-10 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sage-500">
        <NavLink to="/" className="relative block h-16">
          <svg
            className="h-full w-auto"
            viewBox="0 0 217 295"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-sage-600"
              d="M15 163.5V279.5H108.375M15 163.5H108.375M15 163.5V27.5L108.375 84.5L201.75 27.5V163.5M108.375 279.5V222.5M108.375 279.5H201.75V163.5M108.375 222.5H15M108.375 222.5V163.5M108.375 163.5H201.75"
              strokeWidth="30"
            />
          </svg>
        </NavLink>
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
      </div>
    </nav>
  );
}
