import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../public/logo.png";

const navigation = [
  { name: "Projects", href: "#projects", current: false },
  { name: "Our Team", href: "#team", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 520) {
        setColour("#FEF3C7");
      } else {
        setColour("transparent");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <Disclosure
      as="nav"
      style={{ backgroundColor: `${colour}` }}
      className="bg-transparent fixed left-0 w-full z-10 top-0 "
    >
      {({ open }) => (
        <>
          <div
            style={{ backgroundColor: `${colour}` }}
            className=" bg-transparent mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
          >
            <div
              style={{ backgroundColor: `${colour}` }}
              className="relative flex h-16 items-center justify-between"
            >
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-800 hover:bg-amber-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="bg-transparent flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src={logo}
                    width={40}
                    height={40}
                    className="block h-8 w-auto lg:hidden"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-amber-400 text-white"
                            : "text-zinc-800 hover:bg-amber-300 hover:text-white",
                          "px-5 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/*Join button*/}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-amber-400 p-2 text-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <a
                    href="https://dcuclubsandsocs.ie/society/enactus"
                    target="blank"
                  >
                    <p className="font-mono ...">Join Us!</p>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-amber-400 text-white"
                      : "text-zinc-800 hover:bg-amber-300 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
