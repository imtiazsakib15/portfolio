import Lottie from "lottie-react";
import contact from "../../assets/contact.json";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_6rgati8",
        "template_n0qbg7n",
        form.current,
        "f_8k4uCWdGqFAqTi4"
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 border-l-4 border-cyan-600 pl-2 w-max mx-auto">
        Contact
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-72 mx-auto sm:w-1/2">
          <Lottie animationData={contact} loop={false} />
        </div>
        <div className="sm:w-1/2">
          <form
            className="pb-10"
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="mb-6">
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                type="text"
                id="user_name"
                {...register("user_name", {
                  required: "Name is required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              />
              <p>
                {errors.user_name && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.user_name?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <input
                type="email"
                id="user_email"
                {...register("user_email", {
                  required: "Email is required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              />
              <p>
                {errors.user_email && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.user_email?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                {...register("message", {
                  required: "Message is required.",
                })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p>
                {errors.message && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.message?.message}
                  </span>
                )}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Sent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
