import { Button } from "@nextui-org/react";

const logoPath = "/favicon.svg";
const vector = "/vector.svg";

function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mb-7 lg:mb-24 max-w-7xl mx-auto px-3 md:px-10 lg:px-0">
      <div className="flex flex-col gap-7 items-center text-center lg:text-start lg:items-start lg:w-1/2">
        <a href="#top" onClick={scrollToTop}>
          <div className="inline-flex">
            <img src={logoPath} alt="Logo" className="w-10" />
            <p className="font-days-one ml-1 text-4xl">Glokas</p>
          </div>
        </a>

        <p className="text-lg lg:text-xl font-bold">
          One Gospel. Different formats. Multiple languages
        </p>

        <p className="text-[#8CCAB6]">
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
          <Button
            radius="sm"
            className="font-bold bg-green-350 text-white w-36 h-11 hover:bg-black"
            onClick={() => console.log("isOpen")}
          >
            Book a Demo
          </Button>
        </div>

        <div className="hidden lg:flex justify-center mt-5 lg:mr-16 xl:mr-0">
          <img src={vector} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
