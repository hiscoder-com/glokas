import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "@nextui-org/react";
import useBookDemoForm from "@/hooks/useBookDemoForm";
import { useState } from "react";
import axios from "axios";

const logoPath = "/favicon.svg";
const heartPath = "/heart-gray.svg";
const uWLogoPath = "/unfoldingWord-logo.svg";
const aquiferLogoPath = "/aquifer.svg";

function BookDemoPage() {
  const { formData, isFormValid, handleInputChange, resetForm } =
    useBookDemoForm();
  const [submitMessage, setSubmitMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      await axios.post(
        import.meta.env.VITE_FORMSPREE_ENDPOINT_BOOK_A_DEMO,
        formData
      );
      setSubmitMessage(true);
      resetForm();

      setTimeout(() => {
        setSubmitMessage(false);
      }, 10000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col max-w-3xl items-center text-center mx-auto px-3 md:px-10 lg:px-0 pb-16 lg:pb-24 pt-7 text-balance">
      <Link to="/">
        <div className="inline-flex mb-14">
          <img src={logoPath} alt="Logo" className="w-10" />
          <p className="font-days-one ml-1 text-4xl">Glokas</p>
        </div>
      </Link>

      <p className="text-3xl font-days-one">Get started with Glokas</p>

      <p className="text-center mt-5 mb-8">
        Book a call with one of our representatives to get started.
      </p>

      {submitMessage ? (
        <div className="text-center text-balance py-60">
          <p className="text-2xl pb-5 font-days-one text-green-350">
            Thank You!
          </p>
          <p>
            Your form has been successfully submitted. A representative from
            Glokas will be in touch with you shortly to assist with your
            inquiry. We appreciate your interest and look forward to connecting
            with you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 rounded-lg w-full border">
          <div className="flex flex-col md:flex-row md:gap-3">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="First Name"
              labelPlacement="outside"
              placeholder=" "
              value={formData.firstName}
              onValueChange={handleInputChange("firstName")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />

            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Last Name"
              labelPlacement="outside"
              placeholder=" "
              value={formData.lastName}
              onValueChange={handleInputChange("lastName")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-3">
            <Input
              isRequired
              variant="bordered"
              type="email"
              label="Work Email"
              labelPlacement="outside"
              placeholder=" "
              value={formData.email}
              onValueChange={handleInputChange("email")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />

            <Input
              variant="bordered"
              type="tel"
              label="Phone number"
              labelPlacement="outside"
              placeholder=" "
              value={formData.phoneNumber}
              onValueChange={handleInputChange("phoneNumber")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row  md:gap-3">
            <Input
              variant="bordered"
              type="text"
              label="Country/Region"
              labelPlacement="outside"
              placeholder=" "
              value={formData.country}
              onValueChange={handleInputChange("country")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />

            <Input
              variant="bordered"
              type="text"
              label="Organization name"
              labelPlacement="outside"
              placeholder=" "
              value={formData.organization}
              onValueChange={handleInputChange("organization")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row  md:gap-3">
            <Input
              variant="bordered"
              type="text"
              label="How did you hear about us?"
              labelPlacement="outside"
              placeholder=" "
              value={formData.hearAboutUs}
              onValueChange={handleInputChange("hearAboutUs")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />
            <Input
              variant="bordered"
              type="text"
              label="What would you like to see in this demo?"
              labelPlacement="outside"
              placeholder=" "
              value={formData.demoExpectations}
              onValueChange={handleInputChange("demoExpectations")}
              classNames={{
                inputWrapper: "h-10 mb-2.5 border",
              }}
            />
          </div>

          <Textarea
            labelPlacement="outside"
            placeholder=" "
            variant="bordered"
            label="Message"
            value={formData.message}
            onValueChange={handleInputChange("message")}
            minRows={5}
            classNames={{
              label: "text-start",
              inputWrapper: "h-10 mb-2.5 border",
            }}
          />

          <Button
            type="submit"
            radius="sm"
            className="text-base bg-green-350 text-white w-full h-10 hover:bg-black"
            isDisabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "Submitting..." : "Book a Demo"}
          </Button>
        </form>
      )}

      <div className="flex flex-col gap-5 items-center text-center my-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-2.5 items-center">
          <img src={heartPath} alt="heart" className="w-7" />
          <p className="font-days-one text-gray-450">
            Join other international organizations
          </p>
        </div>

        <div className="flex gap-7">
          <a
            href="https://www.unfoldingword.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={uWLogoPath} alt="unfoldingWord-logo" />
          </a>
          <a
            href="https://aquifer.bible/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={aquiferLogoPath} alt="aquiferLogo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDemoPage;
