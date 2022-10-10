import { Link } from '@remix-run/react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

type Menu = {
  label: string;
  uri: string;
}

export default function Navigation(props: { menuItems: Menu[] }) {
  const menuItems = props?.menuItems;

  return (
    <nav className="fixed top-0 z-10 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sage-500">
        <Link to="/" className="relative block h-16">
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
        </Link>
        <DesktopNavigation menuItems={menuItems} />
        <MobileNavigation menuItems={menuItems} />
      </div>
    </nav>
  );
}
