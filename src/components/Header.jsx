import { Button } from "@nextui-org/react";

const logoPath = "/favicon.svg";

function Header() {
  const scrollToSubscribe = () => {
    document
      .getElementById("subscribe-updates")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between sticky top-0 py-7 z-50 mx-auto px-5 md:px-10 lg:justify-center lg:py-10 bg-gradient-to-b from-white via-white to-white/90">
      <div className="inline-flex items-center">
        <img src={logoPath} alt="Logo" className="w-7 lg:w-11" />
        <p className="font-days-one ml-1 lg:ml-1.5 text-2xl lg:text-4xl">
          Glokas
        </p>
      </div>
      <Button
        radius="full"
        className="font-bold bg-green-350 text-white w-36 h-11 lg:hidden hover:bg-black"
        onClick={scrollToSubscribe}
      >
        Join waitlist
      </Button>
    </div>
  );
}

export default Header;
