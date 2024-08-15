import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";

import PropTypes from "prop-types";

import ChevronIcon from "/chevron.svg";

function AccordionIndicator({ isOpen }) {
  return (
    <img
      src={ChevronIcon}
      alt="Plus"
      className={`transition-transform ${isOpen ? "-rotate-90" : ""}`}
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
      title: "Who is Glokas?",
      content: (
        <p>
          First of all, we are born-again followers of Jesus Christ.
          <br />
          <br />
          Second, we are technology people: internet entrepreneurs with
          experience, senior programmers, UI/UX designers, and illustrators.
          <br />
          <br />
          Third, we have extensive experience in Christian content translations,
          including the translation of the Bible, theological materials,
          Christian books, and more.
          <br />
          <br />
          Fourth, we are church people. We love and serve in our local churches
          and deeply understand what the church is. We are truly international,
          with our team spread across the world, and the Lord continues to bring
          more people to join us.
          <br />
          <br />
          Come and be part of the journey together!
        </p>
      ),
    },
    {
      key: "3",
      title: "How much do Glokas tools and services cost?",
      content: (
        <p>
          At Glokas, we aim to be affordable for those bringing the Gospel to
          the world. We offer a free account with some limitations to help you
          get started. For larger ministries that require more personalized
          support, we provide a monthly subscription plan.
          <br />
          <br />
          Our pricing model is simple: you only pay for what you use. For
          example, if you use our AI for translation, you will be charged based
          on your usage. Our goal is to keep all of our prices lower than any
          commercial platform, ensuring that you can access top-tier services
          without breaking the bank.
          <br />
          <br />
          You can learn more about our prices and subscriptions here (coming
          soon).
        </p>
      ),
    },
    {
      key: "4",
      title: "How much does translation work cost?",
      content:
        "Translators set their own rates for translating each word. Glokas adds a small fee on top of this to cover our services. We encourage our translators to keep in mind that Christian ministries often have limited resources and may not have the same funding as commercial companies.",
    },
    {
      key: "5",
      title: "How does Glokas support translation projects?",
      content:
        "Glokas streamlines the translation process by offering tools for uploading files, selecting languages, monitoring progress, and managing reviews. It supports collaboration with both in-house translators and external professionals from our network.",
    },
    {
      key: "6",
      title: "Can I use my own translators with Glokas?",
      content:
        "Yes, you can work with your in-house translators or add them to our platform. Glokas also provides access to a network of professional translators if you need additional support.",
    },
    {
      key: "7",
      title: "What types of materials can be translated using Glokas?",
      content:
        "Glokas supports the translation of various materials, including books, websites, apps, videos, and other Christian content. Our tools are designed to handle diverse formats and content types.",
    },
    {
      key: "8",
      title: "How do I track the progress of my translation project?",
      content:
        "Glokas offers real-time monitoring tools that allow you to see exactly where your translation project stands. You will receive notifications once the translation is complete, ensuring you are always informed.",
    },
    {
      key: "9",
      title: "What happens after the translation is complete?",
      content:
        "Once the translation is complete, you can review and accept the work or request further revisions. After final approval, you can download the translated material in multiple formats suitable for your needs.",
    },
    {
      key: "10",
      title: "How is payment handled for translation services?",
      content:
        "Glokas simplifies the payment process by providing a single invoice that covers all your translation projects. We handle all the logistics, so you don't have to worry about managing payments for multiple translations.",
    },
    {
      key: "11",
      title: "What additional services does Glokas offer?",
      content:
        "In addition to translation and localization, Glokas will soon offer voice-over services. This will further enhance our ability to support the spreading of the Gospel through various media formats.",
    },
    {
      key: "12",
      title: "Is Glokas suitable for large-scale projects?",
      content:
        "Yes, Glokas is designed to handle both small and large-scale translation projects. Our scalable platform and extensive network of translators ensure that we can meet the needs of projects of any size. Even if you need to translate just a few sentences to help spread the Gospel faster, we are happy to assist.",
    },
    {
      key: "13",
      title: "How can I get started with Glokas?",
      content: (
        <>
          To get started with Glokas, simply{" "}
          <Link to="/book-demo" className="text-blue-600 hover:text-blue-500">
            book demo with us
          </Link>
          .
        </>
      ),
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
