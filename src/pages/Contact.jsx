import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb65ff76-63d1-43ed-9d19-68dcae2287fa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white flex flex-col max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name or Company Name"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email or Company Email"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition-colors rounded py-3 font-semibold"
        >
          Shoot a Message
        </button>
      </form>
      <span className="mt-4 text-center">{result}</span>
    </div>
  );
}
