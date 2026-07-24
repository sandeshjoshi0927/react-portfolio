import { IoMdMailOpen } from "@/constants/icons";
import Button from "@/components/Button";

const fieldClass =
  "w-full bg-transparent border-b border-line py-3 text-small placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

const ContactSection = () => {
  return (
    <div
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-16"
      id="contact"
    >
      <div className="lg:col-span-5 space-y-6">
        <p className="eyebrow">// contact</p>
        <h2 className="text-big font-semibold tracking-tight leading-tight">
          Let's build
          <br />
          something together.
        </h2>
        <p className="text-normal max-w-sm" style={{ color: "var(--color-muted)" }}>
          Have a project in mind, or just want to talk shop? My inbox is
          open.
        </p>
        <div className="flex items-center gap-2 text-small pt-2">
          <IoMdMailOpen style={{ color: "var(--color-accent)" }} />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeshjoshi2211@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            sandeshjoshi2211@gmail.com
          </a>
        </div>
      </div>

      <div className="lg:col-span-7">
        <form
          action="https://formspree.io/f/xzbndvvr"
          method="POST"
          id="form"
          className="w-full space-y-6 text-small"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email*"
            required
            className={fieldClass}
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className={fieldClass}
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Say something?"
            required
            className={`${fieldClass} resize-none`}
          />
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
