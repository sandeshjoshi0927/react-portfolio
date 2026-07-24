import { useState, useRef, useEffect } from "react";
import LinkItem from "@/components/LinkItem";
import { GiHamburgerMenu, IoMdClose } from "@/constants/icons";
import { menuItems } from "@/constants";
import logo from "@/assets/icons/logo.svg";

const Navigation = () => {
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
    <div className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-6 sm:px-10">
        <a href="#" className="flex items-center gap-2 py-3 shrink-0">
          <img src={logo} width={28} height={28} alt="logo" />
          <span
            className="hidden sm:inline text-smaller"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
          >
            sandesh.dev
          </span>
        </a>

        {/* desktop: editor-tab style nav */}
        <nav className="hidden lg:flex items-end flex-1 h-full">
          <ul className="flex items-stretch">
            {menuItems.map((menu, index) => (
              <LinkItem key={index} path={menu.path}>
                {menu.title}
              </LinkItem>
            ))}
          </ul>
          <div className="flex-1 border-b border-line h-full" />
          <a
            href="#contact"
            className="mb-2.5 ml-4 shrink-0 px-4 py-1.5 rounded-md text-smaller cursor-pointer border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            contact()
          </a>
        </nav>

        {/* mobile trigger */}
        <div className="flex-1 border-b border-line h-full lg:hidden" />
        <div className="lg:hidden py-3" ref={mobileRef}>
          <button
            aria-label={openMobileMenu ? "Close menu" : "Open menu"}
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
            className="text-ink text-lg p-1"
          >
            {openMobileMenu ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>

          {openMobileMenu && (
            <div className="absolute top-full left-0 right-0 bg-paper border-b border-line px-6 py-4 space-y-1 shadow-[0_12px_24px_-12px_rgba(20,22,26,0.15)]">
              {menuItems.map((menu, index) => (
                <a
                  key={index}
                  href={menu.path}
                  onClick={() => setOpenMobileMenu(false)}
                  className="block py-2 text-small border-b border-line last:border-none"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {menu.title}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpenMobileMenu(false)}
                className="block mt-3 px-4 py-2 rounded-md text-center text-smaller bg-ink text-paper"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                contact()
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
