import Image from "./Image";
import HoverableButton from "./HoverableButton";

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
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#FEFBF6] text-[#2C2C2C] w-full flex items-center justify-between py-4 px-4">
        <div className="w-full flex items-center">
          {/* Extend <h1> further to the left */}
          <Image
            src="https://static.wixstatic.com/media/43e6bc_150e4ac637334ef7af6a98d99295829b~mv2_d_2955_1824_s_2.png/v1/fill/w_140,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GhhLogoReg.png"
            alt=""
            height={50}
            width={100}
            className=""
          />
          {/* Extend <a> elements further to the right */}
          <nav className="flex items-center space-x-3 ml-4">
            <a href="#home" className="hover:text-gray-300 text-base leading-6">
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 text-base leading-6"
            >
              ABOUT
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 text-base leading-6"
            >
              STAFF
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 text-base leading-6"
            >
              SCHEDULE
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 text-base leading-6"
            >
              RESOURCES
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-base leading-6"
            >
              CONTACT
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-base leading-6"
            >
              SUPPORT
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-base leading-6"
            >
              STAFF
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-base leading-6"
            >
              MEDIA
            </a>
            </nav>
            </div>
        <div className="flex items-center justify-end space-x-3">
            <HoverableButton
            text="Sign In"
            style={{
              backgroundColor: "#2C2C2C",
              color: "white",
              padding: "4px 20px",
              borderRadius: "4px",
              fontSize: "16px",
              lineHeight: "1.5",
              whiteSpace: "nowrap",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            className="hover:text-gray-300 text-base"
          />
          <HoverableButton
            text="Register"
            style={{
              backgroundColor: "#FEFBF6",
              color: "#2C2C2C",
              padding: "2px 10px",
              border: "2px solid #2C2C2C",
              borderRadius: "4px",
              fontSize: "16px",
              lineHeight: "1.5",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            className="hover:text-gray-300 text-base"
          />
        </div>  
        </div>
      
    </>
  );
}

export default Header;