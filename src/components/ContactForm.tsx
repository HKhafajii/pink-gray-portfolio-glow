
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
      <div>
        <label htmlFor="email" className="block text-primary mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-primary mb-2">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[150px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-accent text-black hover:bg-accent/90"
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
