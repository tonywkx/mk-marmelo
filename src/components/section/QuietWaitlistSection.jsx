import React, { useState, useEffect } from "react";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Title from "../ui/Title";
import { useNavigate } from "react-router";
import { fetchContactsCount, submitToHubSpot } from "../../api/hubspot";
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
  const baseCount = 27;
  const [counter, setCounter] = useState(baseCount);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const updateCounter = async () => {
      const newCount = await fetchContactsCount(baseCount);
      setCounter(newCount);
    };

    updateCounter();
  }, []);

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
        const newCount = await fetchContactsCount(baseCount);
        setCounter(newCount);

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
        <div className="sm:py-16 py-11 ">
          <Title
            titles={[
              "WANT IN?",
              "WE'LL KEEP IT\u00A0QUIET.",
              "UNTIL IT'S\u00A0TIME.",
            ]}
            className="text-dark-green font-black uppercase sm:mb-12 mb-11"
          />
          <p className="text-dark-green font-medium sm:text-base text-sm sm:mb-10 mb-9 text-center">
            Free for the first 5000. For good.
          </p>
          <div className="flex justify-center items-center sm:mb-22 mb-16">
            <picture>
              <source
                loading="lazy"
                media="(min-width: 768px)"
                srcSet={appImage}
              />
              <img
                loading="lazy"
                className="md:max-w-[560px] max-h-[560px]"
                src={appMobileImage}
                alt="App preview"
              />
            </picture>
          </div>
          <div className="flex justify-center items-center w-full mb-12">
            <form className="flex justify-stretch flex-col sm:w-[450px] w-[240px]">
              <div className="flex flex-col gap-3 sm:mb-5 mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="focus:outline-none py-3.5 px-7 placeholder:text-xs placeholder:text-dark-green/70 font-garnett border-none text-base rounded-full bg-white"
                />
                <div className="relative">
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    defaultCountry={undefined}
                    disableDialCodePrefill={true}
                    inputProps={{
                      placeholder: "PHONE",
                      className:
                        "focus:outline-none placeholder:text-xs  py-3.5 px-4 placeholder:text-dark-green/70 font-garnett border-none text-base rounded-full bg-white w-full",
                    }}
                  />
                </div>
              </div>
              <p className="flex font-garnett flex-col text-dark-green md:text-xs text-[10px] text-center mb-7">
                <span>We'll text a few early birds with a VIP invite to</span>
                <span>our low-key legendary launch party.</span>
              </p>
              <button
                type="submit"
                className="bg-dark-green font-garnett text-yellow self-center font-medium text-xs rounded-full sm:px-12 px-14 py-5 cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </div>
    </section>
  );
};

export default QuietWaitlistSection;
