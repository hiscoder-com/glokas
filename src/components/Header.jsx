import { Button } from "@nextui-org/react";

const logoPath = "/logo.svg";

function Header() {
  return (
    <div className="flex justify-between sticky top-0 py-7 z-10 lg:justify-center lg:py-10 bg-gradient-to-b from-white via-white to-white/95">
      <img src={logoPath} alt="Logo" />
      <Button
        radius="full"
        className="bg-green-350 text-white w-36 h-11 lg:hidden"
      >
        Join waitlist
      </Button>
    </div>
  );
}

export default Header;
