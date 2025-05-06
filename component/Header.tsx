import Image from "./Image";
import Button from "../component/Button";
import LogOffAvatar from "../component/LogOffAvatar";
import Link from "next/link";

function Header() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#444444"; // Darker background on hover
    e.currentTarget.style.color = "#FFD700"; // Gold text on hover
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; // Reset background
    e.currentTarget.style.color = "white"; // Reset text color
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-[var(--primary-color)] text-[#2C2C2C] w-full flex items-center justify-between py-5 px-5">
        <div className="w-full flex items-center">
          {/* Extend <h1> further to the left */}
          <Link href="/">
            <Image
              src="https://static.wixstatic.com/media/43e6bc_150e4ac637334ef7af6a98d99295829b~mv2_d_2955_1824_s_2.png/v1/fill/w_140,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GhhLogoReg.png"
              alt=""
              height={30}
              width={50}
              className=""
            />
          </Link>
          {/* Extend <a> elements further to the right */}
          <nav className="flex items-center space-x-6 ml-4">
            <a
              href="#about"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              ABOUT
            </a>
            <a
              href="#about"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              STAFF
            </a>
            <a
              href="#about"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              SCHEDULE
            </a>
            <a
              href="#about"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              RESOURCES
            </a>
            <a
              href="#contact"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              CONTACT
            </a>
            <a
              href="#contact"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              SUPPORT
            </a>
            <a
              href="#contact"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-light)] text-sm leading-6"
            >
              MEDIA
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-3">
          <Button
            text="GIVE"
            className="btn btn-sm btn-outline border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-color)] hover:border-[var(--accent-color)] text-sm leading-6"
          />
          <LogOffAvatar />
        </div>
      </div>
    </>
  );
}

export default Header;
