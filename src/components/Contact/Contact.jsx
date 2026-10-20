import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    if (!form.current) {
      setSubmitError("The message form is unavailable. Please email me directly.");
      return;
    }

    setSending(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await emailjs.sendForm(
        "service_6rgati8",
        "template_n0qbg7n",
        form.current,
        "f_8k4uCWdGqFAqTi4"
      );
      reset();
      setSubmitSuccess("Thanks - your message has been sent.");
    } catch (error) {
      console.error("EmailJS message submission failed:", error);
      setSubmitError(
        "Your message could not be sent right now. Please try again or email me directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">
            Let&apos;s make
            <br />
            <span>it happen.</span>
          </h2>
          <p className="contact-intro">
            I&apos;m open to discussing thoughtful projects, opportunities, and
            collaborations. Send a note and tell me what you&apos;re working on.
          </p>
          <a className="contact-email" href="mailto:sakib.imtiaz15@gmail.com">
            <FiMail aria-hidden="true" />
            sakib.imtiaz15@gmail.com
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a
              href="https://github.com/imtiazsakib15"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/imtiaz-ahmed-sakib"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="form-field">
            <label htmlFor="user_name">Your name</label>
            <input
              id="user_name"
              type="text"
              autoComplete="name"
              maxLength={100}
              aria-invalid={Boolean(errors.user_name)}
              aria-describedby={errors.user_name ? "name-error" : undefined}
              {...register("user_name", {
                required: "Please enter your name.",
                maxLength: {
                  value: 100,
                  message: "Please keep your name under 100 characters.",
                },
              })}
            />
            {errors.user_name && (
              <p className="form-error" id="name-error" role="alert">
                {errors.user_name.message}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="user_email">Your email</label>
            <input
              id="user_email"
              type="email"
              autoComplete="email"
              maxLength={254}
              aria-invalid={Boolean(errors.user_email)}
              aria-describedby={errors.user_email ? "email-error" : undefined}
              {...register("user_email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
                maxLength: {
                  value: 254,
                  message: "Please enter a shorter email address.",
                },
              })}
            />
            {errors.user_email && (
              <p className="form-error" id="email-error" role="alert">
                {errors.user_email.message}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="message">What would you like to discuss?</label>
            <textarea
              id="message"
              rows="4"
              maxLength={3000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message", {
                required: "Please add a short message.",
                maxLength: {
                  value: 3000,
                  message: "Please keep your message under 3,000 characters.",
                },
              })}
            />
            {errors.message && (
              <p className="form-error" id="message-error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>
          {submitError && (
            <p className="form-error form-submit-error" role="alert">
              {submitError}
            </p>
          )}
          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending message..." : "Send a message"}
            <FiArrowUpRight aria-hidden="true" />
          </button>
          <p className="form-note" aria-live="polite">
            {sending
              ? "Sending your message securely..."
              : submitSuccess || "Your message goes straight to my inbox."}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
