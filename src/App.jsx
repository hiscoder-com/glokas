import { useEffect, useRef } from "react";

import Header from "./components/Header";
import { Button, Input } from "@nextui-org/react";
const filePath = "/file.svg";
const localizationPath = "/localization.svg";
const voiceoverPath = "/voiceover.svg";
const aiDiPath = "/ai+di.svg";
const ourApproachPath = "/our-approach.svg";
const itemPath = "/item.svg";

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
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-5 md:px-10 pb-14 lg:pb-32">
      <Header />
      <div className="text-center rounded-3xl py-12 lg:px-36 mt-5 lg:mt-10 bg-[#F2F2F2]">
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
          className="text-base bg-green-350 text-white w-36 h-11 lg:hidden"
        >
          Join waitlist
        </Button>
      </div>

      <div className="flex flex-col my-24 gap-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex-1">
            <img src={aiDiPath} alt="aiDi" className="w-full h-auto" />
          </div>
          <div className="flex-1">
            <div className="lg:px-16 lg:inline-block lg:self-center">
              <p className="text-2xl lg:text-4xl">AI + DI = Best Translation</p>
              <p className="mt-2.5 lg:mt-7 mb-7 text-balance">
                We harness AI technology in the service of God and people. We
                use AI for translation and text checking, but only believers in
                Christ, living by the Holy Spirit, review and approve the text.
                We called it DI (Divine Intelligence). This ensures our
                translations were made fast, they are high-quality and natural.
              </p>
              <p className="text-balance">
                Glokas is your all-in-one solution for intelligent, centralized,
                and comprehensive Translation Management System (TMS).
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:items-center">
          <div className="flex-1">
            <img
              src={ourApproachPath}
              alt="ourApproach"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <div className="lg:px-16 lg:inline-block lg:self-center">
              <p className="text-2xl lg:text-4xl">Our approach</p>
              <p className="mt-2.5 lg:mt-7 mb-7 text-balance">
                Christian workers face many challenges and hardships in their
                ministry. Translation shouldn&apos;t be one of them. Let us
                shoulder the burden of translation. Our commitment is to ensure
                your message reaches every heart in their native language. Let
                us serve you, so you can continue to serve the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex text-center py-12 lg:py-20 px-7 lg:px-44 mb-24 text-balance rounded-3xl shadow-lg text-white bg-gradient-to-br from-[#8CCAB6] to-[#65B29A]">
        <div className="lg:flex lg:justify-between lg:items-center lg:w-full">
          <div className="lg:w-1/2 lg:text-left">
            <p className="text-5xl mb-2.5">Coming this fall 2024</p>
            <p className="">Subscribe for updates</p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:text-end">
            <Input
              type="email"
              label="Your email"
              classNames={{
                label: "pl-5 text-black",
                inputWrapper: "h-11 mb-2.5",
              }}
            />
            <Button
              radius="full"
              className="text-base bg-black text-white w-36 h-11"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>

      <p className="text-2xl lg:text-4xl text-balance pb-2.5">
        Christian touch behind cutting-edge
        <span className="text-green-350 text-balance"> AI translation</span>
      </p>
      <p className="lg:text-2xl">Translation Management System</p>

      <div className="mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2 flex flex-col gap-10">
            {[
              {
                title: "Efficiency and Speed",
                description:
                  "Streamline your translation projects with a centralized platform, reducing time spent on managing multiple tools, people and resources.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Maintain the integrity and accuracy of your translations with our team of experienced translators, reviewers, and theologians, combined with advanced AI to minimize errors.",
              },
              {
                title: "Seamless Integration",
                description:
                  "Easily integrate our solution into your existing workflows, enhancing collaboration and project management for your team.",
              },
              {
                title: "Customized Solutions",
                description:
                  "Tailor the platform to fit your unique requirements, ensuring that your translation needs are met with precision and care.",
              },
            ].map((item, index) => (
              <div key={index} className="lg:flex-1 flex flex-col">
                <img
                  src={itemPath}
                  alt="item"
                  className="w-[73px] h-[76px] lg:w-[113px] lg:h-[118px] object-cover mb-10"
                />
                <p className="text-xl lg:text-2xl mb-4 lg:mb-3">{item.title}</p>
                <p className="text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10 mt-10 lg:mt-0">
            {[
              {
                title: "Cost-Effective",
                description:
                  "Optimize your translation budget by leveraging a blend of AI technology and human expertise, ensuring high-quality results without overspending.",
              },
              {
                title: "Global Reach",
                description:
                  "Access a network of qualified translators from around the world, including remote and challenging regions, to meet your specific language needs.",
              },
              {
                title: "User-Friendly Interface",
                description:
                  "Navigate your translation projects effortlessly with our intuitive and easy-to-use platform, designed for both novice and experienced users.",
              },
              {
                title: "Reliability and Security",
                description:
                  "Trust in our robust infrastructure and secure processes to protect your sensitive information and deliver consistent, reliable results.",
              },
            ].map((item, index) => (
              <div key={index} className="lg:flex-1 flex flex-col">
                <img
                  src={itemPath}
                  alt="item"
                  className="w-[73px] h-[76px] lg:w-[113px] lg:h-[118px] object-cover mb-10"
                />
                <p className="text-xl lg:text-2xl mb-4 lg:mb-3">{item.title}</p>
                <p className="text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
