import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "@remix-run/react";

type Menu = {
  label: string;
  uri: string;
};

export default function MobileNavigation(props: { menuItems: Menu[] }) {
  const [open, setOpen] = useState(false);
  const menuItems = props?.menuItems;

  return (
    <>
      <div
        className="absolute top-10 right-4 z-50 block h-6 w-6 cursor-pointer sm:hidden"
        onClick={() => setOpen(true)}
      >
        <span
          className={`before:my-2 before:block before:h-px before:w-full before:bg-sage-800 before:transition-transform`}
        ></span>
        <span
          className={`before:my-2 before:block before:h-px before:w-full before:bg-sage-800 before:transition-transform`}
        ></span>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-sage-800 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="pointer-events-auto z-0 w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-sage-400 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="absolute top-10 right-4 h-6 w-6 focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <span
                              className={`before:my-2 before:block before:h-px before:w-full before:bg-sage-800 before:transition-transform ${
                                open
                                  ? "before:translate-y-1 before:-rotate-45"
                                  : ""
                              }`}
                            ></span>
                            <span
                              className={`before:my-2 before:block before:h-px before:w-full before:bg-sage-800 before:transition-transform ${
                                open
                                  ? "before:-translate-y-1 before:rotate-45"
                                  : ""
                              }`}
                            ></span>
                          </button>
                        </div>
                      </div>
                      <div className="relative mt-20 flex flex-1 justify-center px-4 sm:px-6">
                        <ul className="flex flex-col space-y-8">
                          {menuItems.map((menu: Menu) => (
                            <li key={menu.uri}>
                              <Link
                                to={menu.uri}
                                className="font-display text-6xl text-sage-700"
                                onClick={() => setOpen(false)}
                              >
                                {menu.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
