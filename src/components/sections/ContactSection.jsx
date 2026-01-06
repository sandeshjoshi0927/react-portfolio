import React from "react";
import { IoMdMailOpen } from "@/icons";
import Button from "@components/Button";

const ContactSection = () => {
  return (
    <div class="mx-10 my-20 grid grid-cols-12 gap-20" id="contact">
      <div class="col-span-5">
        <h1 className="text-big">
          Let's Chat. <br />
          Get in touch with me.
        </h1>
        <div className="flex items-center gap-2 text-small">
          <IoMdMailOpen />
          <p>
            Mail me at{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeshjoshi2211@gmail.com"
              target="_blank"
              className="text-primary"
            >
              sandeshjoshi2211@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div class="col-span-7">
        <form
          action="https://formspree.io/f/xzbndvvr"
          method="POST"
          id="form"
          className="w-full max-w-2xl mx-auto space-y-4"
        >
          {/* Email */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email*"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Subject */}
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Message */}
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Say something?"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Button */}
          <Button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
