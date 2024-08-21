import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const logoPath = "/glokas-logo.svg";
const vector = "/vector.svg";

function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mb-7 lg:mb-24 px-3 md:px-10">
      <div className="flex gap-10 flex-col lg:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col gap-7 items-center text-center lg:text-start lg:items-start lg:w-1/2">
          <a href="#top" onClick={scrollToTop}>
            <img src={logoPath} alt="Logo" className="h-7" />
          </a>

          <p className="text-lg lg:text-xl font-bold text-balance">
            One Gospel. Different formats. Multiple languages
          </p>

          <p className="text-blue-650 text-balance">
            Translation, localization, and dubbing of Christian content
          </p>

          <p className="text-balance">
            Our mission is to help our partners reach a billion people with the
            Gospel by 2035 through translation, localization, and dubbing.
          </p>

          <p className="text-sm">© 2024 Glokas. All rights reserved.</p>
        </div>

        <div className="lg:w-1/2">
          <div className="text-center lg:text-end">
            <Link to="/book-demo">
              <Button
                radius="sm"
                className="font-bold bg-green-650 text-white w-36 h-11 hover:bg-blue-650"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          <div className="hidden lg:flex justify-center mt-5 lg:mr-16 xl:mr-0">
            <img src={vector} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
