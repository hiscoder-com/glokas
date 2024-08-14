import { useState, useEffect } from "react";

function useBookDemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    organization: "",
    hearAboutUs: "",
    demoExpectations: "",
    message: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }
  };

  useEffect(() => {
    const { firstName, lastName } = formData;
    const isValid =
      firstName.trim() !== "" && lastName.trim() !== "" && isEmailValid;
    setIsFormValid(isValid);
  }, [formData, isEmailValid]);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      organization: "",
      hearAboutUs: "",
      demoExpectations: "",
      message: "",
    });
    setIsEmailValid(false);
    setIsFormValid(false);
  };

  return {
    formData,
    isFormValid,
    handleInputChange,
    resetForm,
    setFormData,
  };
}

export default useBookDemoForm;
