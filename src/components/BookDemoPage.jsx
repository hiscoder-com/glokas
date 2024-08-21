import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "@nextui-org/react";
import useBookDemoForm from "@/hooks/useBookDemoForm";
import { useState } from "react";
import axios from "axios";

const logoPath = "/glokas-logo.svg";
const heartPath = "/heart-gray.svg";
const vCanaLogoPath = "/v-cana-logo.svg";

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
        <img src={logoPath} alt="Logo" className="h-11 mb-14" />
      </Link>

      <p className="text-3xl font-helvetica font-bold">
        Get started with Glokas
      </p>

      <p className="text-center mt-5 mb-8">
        Book a call with one of our representatives to get started.
      </p>

      {submitMessage ? (
        <div className="text-center text-balance py-60">
          <p className="text-2xl pb-5 font-helvetica font-bold text-green-350">
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
                label: "text-xs sm:text-sm md:text-base",
                inputWrapper: "h-10 mb-4 border",
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
              label: "text-start text-xs sm:text-sm md:text-base",
              inputWrapper: "h-10 mb-4 border",
            }}
          />

          <Button
            type="submit"
            radius="sm"
            className="text-base bg-green-650 text-white w-full h-10 hover:bg-blue-650"
            isDisabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "Submitting..." : "Book a Demo"}
          </Button>
        </form>
      )}

      <div className="flex flex-col gap-5 items-center text-center my-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-2.5 items-center">
          <img src={heartPath} alt="heart" className="w-7" />
          <p className="font-helvetica font-bold text-gray-450">
            by organizations and ministries who love to go global
          </p>
        </div>

        <a href="https://v-cana.com/" target="_blank" rel="noopener noreferrer">
          <img src={vCanaLogoPath} alt="v-cana-logo" />
        </a>
      </div>
    </div>
  );
}

export default BookDemoPage;
