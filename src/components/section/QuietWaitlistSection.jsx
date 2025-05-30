import React, { useState, useEffect } from "react";
import { z } from "zod";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Title from "../ui/Title";
import { useNavigate } from "react-router";
import appImage from "../../assets/images/app.png";
import appMobileImage from "../../assets/images/app-mobile.png";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?\d{10,15}$/.test(val), {
      message: "Invalid phone format",
    }),
});

const QuietWaitlistSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("waitlistCounter");
    return savedCounter ? parseInt(savedCounter) : 27;
  });

  useEffect(() => {
    localStorage.setItem("waitlistCounter", counter.toString());
  }, [counter]);

  const submitToHubSpot = async (data) => {
    try {
      const fields = [{ name: "email", value: data.email }];

      if (formData.phone.trim()) {
        fields.push({ name: "mobilephone", value: formData.phone });
      }

      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242864031/22b0d541-da12-4cfa-afd9-deffd1e3db9a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fields }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      return true;
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      return false;
    }
  };

  const validateForm = () => {
    const fieldErrors = {};

    if (!formData.email.trim()) {
      fieldErrors.email = "Oops, mind dropping your email in?";
      setErrors(fieldErrors);
      return false;
    }

    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
      }
    }

    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({
      ...prev,
      phone: phone,
    }));
  };

  const handlerOnClick = async (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (isValidForm) {
      setIsSubmitting(true);
      const success = await submitToHubSpot(formData);
      setIsSubmitting(false);

      if (success) {
        setCounter((prev) => prev + 1);
        setTimeout(() => {
          navigate("/after-singup");
        }, 500);
      } else {
        setErrors({
          general: "Something went wrong. Please try again.",
        });
      }
    }
  };

  return (
    <section id="waitlist" className="bg-yellow">
      <div className="container">
        <div className="py-15">
          <Title
            titles={[
              "WANT IN?",
              "WE'LL KEEP IT\u00A0QUIET.",
              "UNTIL IT'S\u00A0TIME.",
            ]}
            className="text-dark-green font-black uppercase mb-10"
          />
          <p className="text-dark-green font-medium md:text-lg text-base mb-10 text-center">
            Free for the first 500. For good.
          </p>
          <div className="flex justify-center items-center mb-[90px]">
            <picture>
              <source media="(min-width: 768px)" srcSet={appImage} />
              <img
                className="md:max-w-[600px]"
                src={appMobileImage}
                alt="App preview"
              />
            </picture>
          </div>
          <div className="flex justify-center items-center w-full mb-12">
            <form className="flex justify-stretch flex-col sm:w-[500px] w-[250px]">
              <div className="flex flex-col gap-2 mb-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="focus:outline-none py-4 px-7 placeholder:text-dark-green/70 font-garnett border-none text-xs rounded-full bg-white"
                />
                <div className="relative">
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    defaultCountry={undefined}
                    disableDialCodePrefill={true}
                    inputProps={{
                      placeholder: "PHONE",
                      className: "focus:outline-none py-4 px-4 placeholder:text-dark-green/70 font-garnett border-none text-xs rounded-full bg-white w-full"
                    }}
                  />
                </div>
              </div>
              <p className="flex font-garnett flex-col text-dark-green md:text-sm text-[10px] text-center mb-10">
                <span>We'll text a few early birds with a VIP invite to</span>
                <span>our low-key legendary launch party.</span>
              </p>
              <button
                type="submit"
                className="bg-dark-green font-garnett text-yellow self-center font-medium text-xs rounded-full px-14 py-5 cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlerOnClick}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "JOIN THE WAITLIST"}
              </button>
              {(errors.email || errors.phone || errors.general) && (
                <p className="text-red-500 text-center mt-4 font-medium text-sm">
                  {errors.email || errors.phone || errors.general}
                </p>
              )}
            </form>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-dark-green font-bold md:text-[40px] text-3xl font-greed">
              {counter}
            </p>
            <p className="text-dark-green font-medium md:text-3xl text-xl font-greed">
              people have already joined quietly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuietWaitlistSection;
