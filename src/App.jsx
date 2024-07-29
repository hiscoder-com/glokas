import { useEffect, useRef } from "react";

import Header from "./components/Header";
import { Button } from "@nextui-org/react";
const filePath = "/file.svg";
const localizationPath = "/localization.svg";
const voiceoverPath = "/voiceover.svg";

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const totalWidth = scrollContainerRef.current.scrollWidth;
      const centerPosition = (totalWidth - containerWidth) / 2;

      scrollContainerRef.current.scrollLeft = centerPosition;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-5 md:px-10 gap-5 md:gap-10">
      <Header />
      <div className="text-center rounded-3xl py-12 lg:px-36 bg-[#F2F2F2]">
        <p className="text-2xl lg:text-5xl mb-2.5 mx-3.5 lg:mx-0 lg:text-balance">
          One Gospel, Many Formats, Multiple Languages
        </p>
        <p className="text-sm mx-3.5 lg:mx-36 lg:text-balance">
          Glokas is an AI-powered translation and localization platform
          specifically designed for Christian content and projects.
        </p>
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto py-12 scrollbar-hide"
        >
          <div className="flex gap-2.5 min-w-max">
            <div className="text-start bg-white rounded-3xl px-7 py-10 lg:py-7 w-64">
              <img src={filePath} alt="file" />
              <p className="mt-1 mb-2.5 text-xl font-medium">Translation</p>
              <p className="text-sm">Text translation and checking</p>
            </div>

            <div className="text-start bg-white rounded-3xl px-7 py-10 lg:py-7 w-64">
              <img src={localizationPath} alt="localization" />
              <p className="mt-1 mb-2.5 text-xl font-medium">Localization</p>
              <p className="text-sm">Mobile apps, software and websites</p>
            </div>

            <div className="text-start bg-white rounded-3xl px-7 py-10 lg:py-7 w-64">
              <img src={voiceoverPath} alt="voiceover" />
              <p className="mt-1 mb-2.5 text-xl font-medium">Voiceover</p>
              <p className="text-sm">
                Voiceover your content via AI models and real human
              </p>
            </div>
          </div>
        </div>

        <Button
          radius="full"
          className="bg-green-350 text-white w-36 h-11 lg:hidden"
        >
          Join waitlist
        </Button>
      </div>
    </div>
  );
}

export default App;
