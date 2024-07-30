import { useState } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import { Button, Input } from "@nextui-org/react";

import useEmailValidation from "@/hooks/useEmailValidation";

function EmailSubscriptionForm({ setSubmitMessage }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, isEmailValid, handleEmailChange, setEmail, setIsEmailValid } =
    useEmailValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid) return;

    setIsSubmitting(true);

    try {
      await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, { email });
      setSubmitMessage(true);
      setEmail("");
      setIsEmailValid(false);

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
    <form
      onSubmit={handleSubmit}
      className="mt-10 lg:mt-0 lg:w-1/2 lg:text-end lg:ml-8"
    >
      <Input
        type="email"
        label="Your email"
        value={email}
        onChange={handleEmailChange}
        classNames={{ label: "pl-5 text-black", inputWrapper: "h-11 mb-2.5" }}
      />
      <Button
        type="submit"
        radius="full"
        className="font-bold text-base bg-black text-white w-36 h-11 hover:bg-white hover:text-black"
        isDisabled={isSubmitting || !isEmailValid}
      >
        {isSubmitting ? "Submitting..." : "Join waitlist"}
      </Button>
    </form>
  );
}

EmailSubscriptionForm.propTypes = {
  setSubmitMessage: PropTypes.func.isRequired,
};

export default EmailSubscriptionForm;
