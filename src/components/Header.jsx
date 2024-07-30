import { Button } from "@nextui-org/react";

const logoPath = "/logo.svg";

function Header() {
  const scrollToSubscribe = () => {
    document
      .getElementById("subscribe-updates")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between sticky top-0 py-7 z-50 mx-auto px-5 md:px-10 lg:justify-center lg:py-10 bg-gradient-to-b from-white via-white to-white/90">
      <img src={logoPath} alt="Logo" />
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
