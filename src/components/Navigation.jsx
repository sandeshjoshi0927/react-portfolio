import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import LinkItem from "./LinkItem";
import { GiHamburgerMenu } from "../icons";

const Navigation = () => {
  const menuItems = [
    { title: "Home", path: "#" },
    { title: "Skills", path: "#skills" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Service", path: "#service" },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileRef = useRef(null);

  useEffect(() => {
    if (!openMobileMenu) return;

    const handleOutsideClick = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openMobileMenu]);

  return (
    <div className="sticky top-0 bg-white opacity-95 z-99">
      <div className="grid grid-cols-12 items-center py-4 px-10 container m-auto w-full">
        <div className="col-span-2">SJ</div>
        <div className="col-span-10 hidden md:grid grid-cols-12 items-center">
          <ul className="col-span-10 flex-around">
            {menuItems.map((menu, index) => (
              <LinkItem key={index} path={menu.path}>
                {menu.title}
              </LinkItem>
            ))}
          </ul>
          <div className="col-span-2 place-self-end">
            <Button
              to="#contact"
              color="bg-secondary"
              className="hover:opacity-85"
            >
              Contact
            </Button>
          </div>
        </div>

        {/* mobile navigation */}
        <div className="col-span-10 flex justify-end md:hidden" ref={mobileRef}>
          <GiHamburgerMenu
            className="text-secondary"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
          {openMobileMenu && (
            <div className="absolute top-14 bg-secondary text-white container m-auto px-10 py-4 right-0 left-0 space-y-4">
              {menuItems.map((menu, index) => (
                <LinkItem key={index} path={menu.path}>
                  {menu.title}
                </LinkItem>
              ))}
              <Button
                to="#contact"
                color="bg-primary"
                className="hover:opacity-85"
              >
                Contact
              </Button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-b border-gray-200" />
    </div>
  );
};

export default Navigation;
