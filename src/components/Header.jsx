import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const logoPath = "/glokas-logo.svg";

function Header() {
  const scrollToTop = (event) => {
    event.preventDefault();
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 py-5 z-50 px-3 md:px-10 lg:py-7 bg-gradient-to-b from-white via-white to-white/90">
      <div className="flex justify-between max-w-7xl mx-auto">
        <a href="#top" onClick={scrollToTop} className="content-center">
          <img src={logoPath} alt="Logo" className="h-5 lg:h-7" />
        </a>

        <Link to="/book-demo">
          <Button
            radius="sm"
            className="font-bold bg-green-650 text-white w-36 h-11 hover:bg-blue-650"
          >
            Book a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
