import React, { useState, useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";
import ContactData from "../data/contact.json";
import * as Icon from "@phosphor-icons/react";

export const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    setContactData(ContactData);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb65ff76-63d1-43ed-9d19-68dcae2287fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks for Reaching Out!");
        event.target.reset();
        setOpen(true);
      } else {
        setResult("Oops! Message Failed");
        setOpen(true);
      }
    } catch (e) {
      console.log(e);
      setResult("Oops! Message Failed");
      setOpen(true);
    }
  };

  if (!contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading contact info...
      </div>
    );
  }

  return (
    <div className="min-h-fit mt-[20vh] bg-black/25 backdrop-blur-sm text-white flex mx-[20vw] items-center rounded-3xl">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-4">
        <h1 className="text-4xl text-[#E0E0E0] font-bold mb-8 text-center">
          Contact Me
        </h1>
        <a className="px-12 text-center">
          If you have any questions or need more information, don’t hesitate to
          contact me via the platforms below.
          <br />
          Or just "
          <a className="text-[#1F8F4C] font-extrabold">Shoot a Message</a>".
        </a>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4">
          <a
            href={`tel:${contactData.phone}`}
            className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#A7B94B] transition-colors"
          >
            <Icon.PhoneCall size={20} className="text-[#A7B94B]" />
            {contactData.phone}
          </a>

          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#A7B94B] transition-colors"
          >
            <Icon.EnvelopeSimple size={20} className="text-[#A7B94B]" />
            {contactData.email}
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#A7B94B] transition-colors"
          >
            <Icon.GithubLogoIcon size={20} className="text-[#A7B94B]" />
            q-tran14
          </a>

          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E0E0E0] hover:text-[#A7B94B] transition-colors"
          >
            <Icon.LinkedinLogo size={20} className="text-[#A7B94B]" />
            Trần Quân
          </a>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 p-6">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="from_name" value="Contact from HR" />
          <input
            type="text"
            name="name"
            placeholder="Your Name or Company Name"
            className="p-3 rounded bg-[#2B2B2B] text-white border-[#3C3C3C] focus:outline-none focus:ring-2 focus:ring-[#A7B94B]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email or Company Email"
            className="p-3 rounded bg-[#2B2B2B] text-white focus:outline-none focus:ring-2 focus:ring-[#A7B94B]"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="p-3 rounded bg-[#2B2B2B] text-white focus:outline-none focus:ring-2 focus:ring-[#A7B94B]"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="p-3 rounded bg-[#2B2B2B] text-white focus:outline-none focus:ring-2 focus:ring-[#A7B94B]"
            required
          />
          <button
            type="submit"
            className="bg-[#1F8F4C]/45 hover:bg-[#A7B94B] transition-colors rounded py-3 font-bold"
          >
            {" "}
            Shoot a Message{" "}
          </button>
        </form>
        <Toast.Provider>
          <Toast.Root
            open={open}
            onOpenChange={setOpen}
            duration={3000}
            className="fixed p-4 bottom-5 right-20 max-w-76 max-h-fit sepia saturate-100 invert-5 rounded-2xl shadow-lg backdrop-blur-sm overflow-auto"
          >
            <Toast.Title className="font-bold">{result}</Toast.Title>
            <Toast.Description className="text-sm italic">
              {result === "Thanks for Reaching Out!"
                ? "I got your message and will get back to you as soon as I can."
                : "Sorry for the trouble. Our system ran into an issue while sending your message. We're working on fixing it!"}
            </Toast.Description>
          </Toast.Root>
          <Toast.Viewport className="fixed bottom-6 right-8" />
        </Toast.Provider>
      </div>
    </div>
  );
};
