import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";

import EmailSubscriptionForm from "./EmailSubscriptionForm";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const costEffectivePath = "/cost-effective.svg";
const localizationPath = "/localization.svg";
const integrationPath = "/integration.svg";
const vCanaLogoPath = "/v-cana-logo.svg";
const glokasTMSPath = "/glokasTMS.svg";
const guaranteePath = "/guarantee.svg";
const interfacePath = "/interface.svg";
const solutionsPath = "/solutions.svg";
const voiceoverPath = "/voiceover.svg";
const monitorPath = "/monitor.svg";
const uploadPath = "/upload.svg";
const managePath = "/manage.svg";
const heartPath = "/heart.svg";
const reachPath = "/reach.svg";
const filePath = "/file.svg";
const payPath = "/pay.svg";

function MainContent() {
  const [submitMessage, setSubmitMessage] = useState(false);
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
    <div className="px-3 md:px-10 pb-16 lg:pb-24">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="text-center rounded-3xl py-12 mt-1 bg-gray-250">
          <p className="text-2xl lg:text-5xl mb-2.5 lg:mb-7 mx-6 lg:mx-5 lg:text-balance font-days-one">
            One Gospel, Many Formats, Multiple Languages
          </p>
          <p className="text-lg lg:text-xl mx-9 lg:mx-48 text-balance">
            Glokas is an AI-powered translation and localization platform
            specifically designed for Christian content and projects.
          </p>
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto py-12 snap-x snap-mandatory scrollbar-hide"
          >
            <div className="flex justify-center gap-5 min-w-max sm:min-w-0 px-14 lg:px-0">
              <ContentCard
                imgSrc={filePath}
                title="Translation"
                description="Text translation and checking"
              />

              <ContentCard
                imgSrc={localizationPath}
                title="Localization"
                description="Mobile apps, software and websites"
              />

              <ContentCard
                imgSrc={voiceoverPath}
                title="Voiceover"
                description="Voiceover your content via AI models and real human"
              />
            </div>
          </div>

          <Link to="/book-demo">
            <Button
              radius="sm"
              className="font-bold bg-green-650 text-white w-36 h-11 hover:bg-blue-650"
            >
              Book a Demo
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-5 items-center text-center my-20 mx-5 lg:pb-16">
          <div className="flex flex-col md:flex-row gap-5 md:gap-2.5 items-center">
            <img src={heartPath} alt="heart" className="w-7" />
            <p className="text-xl">
              by organizations and ministries who love to go global
            </p>
          </div>

          <a
            href="https://v-cana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vCanaLogoPath} alt="v-cana-logo" />
          </a>
        </div>

        <p className="text-2xl lg:text-4xl text-center pb-5 font-days-one">
          Why partner with Glokas?
        </p>
        <p className="text-center text-lg lg:text-2xl text-balance">
          Delivering high-quality, cost-effective translations with seamless
          integration and a global network of christian translators.
        </p>
        <div className="mt-12 lg:mt-16 mb-12 text-wrap">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5">
            {[
              {
                image: guaranteePath,
                title: "High-Quality AI & Human Translation",
                description:
                  "Provide state-of-the-art AI translation with high accuracy and natural results, supplemented by human translators and checkers to ensure integrity and spiritual quality.",
              },
              {
                image: reachPath,
                title: "Global Reach",
                description:
                  "Access a network of qualified translators from around the world, including remote and challenging regions, to meet specific language needs.",
              },
              {
                image: integrationPath,
                title: "Seamless Integration",
                description:
                  "Easily integrate our solution into your existing workflows, enhancing collaboration and project management for your team.",
              },
              {
                image: interfacePath,
                title: "User-Friendly Interface",
                description:
                  "Navigate translation projects effortlessly with an intuitive and easy-to-use platform, designed for both novice and experienced users.",
              },
              {
                image: solutionsPath,
                title: "Customized Solutions",
                description:
                  "Tailor the platform to fit your unique requirements, ensuring that your translation needs are met with precision and care.",
              },
              {
                image: costEffectivePath,
                title: "Cost-Effective",
                description:
                  "Optimize your translation budget by leveraging a blend of AI technology and human expertise, ensuring high-quality results without overspending.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-7 bg-gray-150 rounded-3xl p-5 lg:h-96 md:flex-col"
              >
                <div className="bg-gray-350 rounded-xl p-2.5 w-16 h-16 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-max"
                  />
                </div>
                <div className="text-balance md:flex-grow">
                  <p className="text-2xl mb-2.5 font-days-one text-blue-650">
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xl lg:text-4xl text-center pb-5 font-days-one">
          How does it work?
        </p>
        <p className="text-center text-lg lg:text-2xl text-balance lg:mx-48">
          Reduce costs, save time, and get high-quality translations. Translate
          more and explore a wider range of languages.
        </p>

        <div className="mt-12 lg:mt-16 mb-20 text-wrap">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <div className="flex gap-7 bg-zinc-150 rounded-3xl p-5 lg:py-14 lg:h-80 md:order-1">
              <div className="hidden rounded-xl p-1.5 lg:flex justify-center items-center">
                <img src={uploadPath} alt="1. Start" className="max-w-max" />
              </div>
              <div className="text-balance md:flex-grow content-center">
                <p className="text-xl mb-5 lg:mb-2.5 font-days-one">1. Start</p>
                <p>
                  Upload file and select the languages you want material
                  translated into. You can work with your own in-house
                  translators or choose from our database of translators.
                </p>
              </div>
            </div>

            <div className="flex gap-7 bg-zinc-150 rounded-3xl p-5 lg:py-14 lg:h-80 md:order-3">
              <div className="hidden rounded-xl p-1.5 lg:flex justify-center items-center">
                <img src={managePath} alt="2. Manage" className="max-w-max" />
              </div>
              <div className="text-balance md:flex-grow content-center">
                <p className="text-xl mb-5 lg:mb-2.5 font-days-one">
                  2. Manage
                </p>
                <p>
                  Manage all your files and translation and translators in one
                  place.
                </p>
              </div>
            </div>

            <div className="flex gap-7 bg-zinc-150 rounded-3xl p-5 lg:py-14 lg:h-80 md:order-2">
              <div className="hidden rounded-xl p-1.5 lg:flex justify-center items-center">
                <img src={monitorPath} alt="3. Monitor" className="max-w-max" />
              </div>
              <div className="text-balance md:flex-grow content-center">
                <p className="text-xl mb-5 lg:mb-2.5 font-days-one">
                  3. Monitor
                </p>
                <p>
                  While translation is in progress you can see where exactly
                  your where translation is. Once its done you be notified.
                  Verify and accept work.
                </p>
              </div>
            </div>

            <div className="flex gap-7 bg-zinc-150 rounded-3xl p-5 lg:py-14 lg:h-80 md:order-4">
              <div className="hidden rounded-xl p-1.5 lg:flex justify-center items-center">
                <img src={payPath} alt="4. Pay" className="max-w-max" />
              </div>
              <div className="text-balance md:flex-grow content-center">
                <p className="text-xl mb-5 lg:mb-2.5 font-days-one">4. Pay</p>
                <p>
                  Stop worrying about how to manage payments for translations
                  across multiple languages. With us, you receive a single
                  invoice that covers all your projects. We handle all the
                  logistics so you can focus on what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl lg:text-4xl text-center pb-5 font-days-one text-blue-650">
          Empowering Your Ministry Through Seamless Translation
        </p>
        <p className="text-center text-lg lg:text-2xl text-balance">
          Our system is designed to accelerate the worldwide spread of the
          Gospel by making the translation process faster, more cost-effective,
          and efficiently organized.
        </p>

        <div className="flex gap-20 md:gap-36 bg-[url('/stand.svg')] md:bg-[url('/standDesk.svg')] bg-cover bg-center bg-no-repeat rounded-3xl flex-col md:flex-row py-12 px-5 lg:px-11 lg:pt-10 lg:pb-14 mt-12 lg:mt-16 mb-20 text-wrap">
          <div className="text-balance md:w-1/2 md:content-center lg:py-28">
            <p className="text-3xl lg:text-4xl font-days-one">Glokas TMS</p>
            <p className="text-2xl my-5 font-days-one leading-6">
              Translation Management System
            </p>
            <p>
              Glokas TMS centralizes all translations, translators, and
              languages in one place, making the entire process more efficient
              and organized. It simplifies collaboration, ensures consistency,
              and streamlines payments to translators, making it an essential
              tool for ministries aiming to reach a global audience effectively.
            </p>
          </div>

          <div className="flex justify-center md:w-1/2">
            <img src={glokasTMSPath} alt="payPath" />
          </div>
        </div>

        <p className="text-xl lg:text-2xl text-center font-days-one">Q&A</p>
        <p className="text-2xl lg:text-4xl text-center pb-2.5 font-days-one text-blue-650">
          Frequently Asked Questions
        </p>
        <p className="text-center text-lg lg:text-2xl">
          Learn more about Glokas
        </p>

        <FrequentlyAskedQuestions />

        <div className="lg:flex text-center py-12 lg:py-20 px-7 lg:px-44 text-balance rounded-3xl shadow-lg text-white bg-gradient-to-br from-green-550 to-green-650">
          {submitMessage ? (
            <div className="w-full flex items-center justify-center">
              <p className="text-2xl lg:text-5xl font-days-one">
                Thank you for joining our waitlist! We&apos;ll keep you updated
                on our launch.
              </p>
            </div>
          ) : (
            <div className="lg:flex lg:justify-between lg:items-center lg:w-full">
              <div className="lg:w-1/2 lg:text-left">
                <p className="text-5xl mb-2.5 font-days-one">
                  Coming this fall 2024
                </p>
                <p>Subscribe for updates</p>
              </div>
              <EmailSubscriptionForm setSubmitMessage={setSubmitMessage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ContentCard = ({ imgSrc, title, description }) => (
  <div className="text-start bg-white rounded-3xl px-7 py-10 lg:py-7 w-64 snap-center">
    <img src={imgSrc} alt={title} />
    <p className="mt-1 mb-2.5 text-xl font-medium">{title}</p>
    <p className="text-sm">{description}</p>
  </div>
);

ContentCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainContent;
