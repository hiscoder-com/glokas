import { Accordion, AccordionItem } from "@nextui-org/react";

import PropTypes from "prop-types";

import PlusIcon from "/plus.svg";

function AccordionIndicator({ isOpen }) {
  return (
    <img
      src={PlusIcon}
      alt="Plus"
      className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
    />
  );
}

function FrequentlyAskedQuestions() {
  const accordionItems = [
    {
      key: "1",
      title: "What is Glokas?",
      content:
        "Glokas is an integrated suite of technologies, platforms, tools, and Christian network dedicated to technology and translation. Our primary focus is on translation, localization, and, soon, voice-over services.",
    },
    {
      key: "2",
      title: "How does Glokas support translation projects?",
      content:
        "Glokas streamlines the translation process by offering tools for uploading files, selecting languages, monitoring progress, and managing reviews. It supports collaboration with both in-house translators and external professionals from our network.",
    },
    {
      key: "3",
      title: "Can I use my own translators with Glokas?",
      content:
        "Yes, you can work with your in-house translators or add them to our platform. Glokas also provides access to a network of professional translators if you need additional support.",
    },
    {
      key: "4",
      title: "What types of materials can be translated using Glokas?",
      content:
        "Glokas supports the translation of various materials, including books, websites, apps, videos, and other Christian content. Our tools are designed to handle diverse formats and content types.",
    },
    {
      key: "5",
      title: "How do I track the progress of my translation project?",
      content:
        "Glokas offers real-time monitoring tools that allow you to see exactly where your translation project stands. You will receive notifications once the translation is complete, ensuring you are always informed.",
    },
    {
      key: "6",
      title: "What happens after the translation is complete?",
      content:
        "Once the translation is complete, you can review and accept the work or request further revisions. After final approval, you can download the translated material in multiple formats suitable for your needs.",
    },
    {
      key: "7",
      title: "How is payment handled for translation services?",
      content:
        "Glokas simplifies the payment process by providing a single invoice that covers all your translation projects. We handle all the logistics, so you don't have to worry about managing payments for multiple translations.",
    },
    {
      key: "8",
      title: "What additional services does Glokas offer?",
      content:
        "In addition to translation and localization, Glokas will soon offer voice-over services. This will further enhance our ability to support the spreading of the Gospel through various media formats.",
    },
    {
      key: "9",
      title: "Is Glokas suitable for large-scale projects?",
      content:
        "Yes, Glokas is designed to handle both small and large-scale translation projects. Our scalable platform and extensive network of translators ensure that we can meet the needs of projects of any size. Even if you need to translate just a few sentences to help spread the Gospel faster, we are happy to assist.",
    },
    {
      key: "10",
      title: "How can I get started with Glokas?",
      content: "To get started with Glokas, simply book demo with us.",
    },
  ];

  return (
    <div className="mt-12 mb-16 lg:mt-16 lg:mb-24">
      <Accordion
        defaultExpandedKeys={["1"]}
        itemClasses={{
          title: "text-xl font-bold",
          trigger: "py-5",
          content: "py-5",
        }}
      >
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={`Accordion ${item.key}`}
            indicator={({ isOpen }) => <AccordionIndicator isOpen={isOpen} />}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

AccordionIndicator.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default FrequentlyAskedQuestions;
