import { useState } from "react";
import { Mail, MapPin, FileText, Send } from "lucide-react";
import { profile } from "../data/content";
import { supabase } from "../lib/supabaseClient";

export default function Contact() {
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();               // stop the page from reloading
    setStatus("sending");

    try {
      const formData = new FormData(e.target);
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      if (!error) {
        setStatus("sent");
        e.target.reset();             // clear the form
      } else {
        console.error("Could not send contact message:", error);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        <div>
          <h2 className="section__title">Hiring? Let's talk.</h2>
          <p className="contact__lead">
            I'm open to junior developer and internship roles. Send me a message
            and I'll get back to you.
          </p>

          <ul className="contact__list">
            <li>
              <Mail size={20} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <MapPin size={20} />
              <span>{profile.location}</span>
            </li>
            <li>
              <FileText size={20} />
              <a href={profile.cv}>View my CV</a>
            </li>
          </ul>

          <div className="contact__links">
            {profile.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your full name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about the role or project" required />
          </label>

          <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
            <Send size={16} />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <p className="form__status" role="status" aria-live="polite">
            {status === "sent" && "Thanks! Your message was sent. I'll reply to the email you gave."}
            {status === "error" && "Something went wrong. Please try again, or email me directly."}
            {status === "idle" && "I'll reply to the email you give here."}
          </p>
        </form>
      </div>
    </section>
  );
}
