import {
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Menu } from "~/entities/menu/menu";

export const BurgerMenu = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const BurgerButton = ({
    icon,
    onClick = toggleMenu,
  }: {
    icon: ReactElement;
    onClick?: () => void;
  }) => (
    <button
      className="text-teal-800 transition-transform hover:scale-110 hover:text-teal-600"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {icon}
    </button>
  );

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <div className="relative md:hidden" ref={menuRef}>
      {menuOpen ? (
        <nav className="absolute -top-5 right-2 z-[100] border border-teal-800 bg-white/95 p-2 shadow-lg md:p-5">
          <div className="absolute right-2 top-2">
            <BurgerButton icon={<FaTimes size={24} />} />
          </div>
          <ul
            role="menu"
            tabIndex={0}
            className="list-none text-base font-semibold"
            onClick={closeMenu}
            onKeyDown={handleKeyDown}
          >
            <Menu />
          </ul>
        </nav>
      ) : (
        <BurgerButton icon={<FaBars size={24} />} />
      )}
    </div>
  );
};
