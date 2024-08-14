import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const logoPath = "/favicon.svg";

function Header() {
  const scrollToTop = (event) => {
    event.preventDefault();
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 py-7 z-50 px-3 md:px-10 lg:py-10 bg-gradient-to-b from-white via-white to-white/90">
      <div className="flex justify-between max-w-7xl mx-auto">
        <a href="#top" onClick={scrollToTop}>
          <div className="inline-flex items-center">
            <img src={logoPath} alt="Logo" className="w-7 lg:w-11" />
            <p className="font-days-one ml-1 lg:ml-1.5 text-2xl lg:text-4xl">
              Glokas
            </p>
          </div>
        </a>

        <Link to="/book-demo">
          <Button
            radius="sm"
            className="font-bold bg-green-350 text-white w-36 h-11 hover:bg-black"
          >
            Book a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
