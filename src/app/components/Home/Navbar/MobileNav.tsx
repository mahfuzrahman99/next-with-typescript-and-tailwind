import Link from "next/link";
import { navLinks } from "../../../../../constant/constant";
import { CgClose } from "react-icons/cg";

// props type
interface MobileNavProps {
  closeNav: () => void;
  showNav: boolean;
}

function MobileNav({ closeNav, showNav }: MobileNavProps) {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}/>
      {/* Mobile Nav */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col w-[80%] h-full sm:w-[60%] bg-[#0f0715] space-y-6 z-[1006]`}>
      <CgClose onClick={closeNav} className="absolute text-white w-6 h-6 top-5 right-5 z-[1007] cursor-pointer" />
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav__link text-[1.5rem] font-medium text-center ml-12
                   py-2 ">
                    {navLink.lebel}
                  </p>
                </Link>
              );
            })}
      </div>
      {/* Close Button */}
      
    </div>
  );
}

export default MobileNav;
