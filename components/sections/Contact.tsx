'use client';

import { useState } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
    } else {
      setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message' });
    }
  }

  return (
    <section className="space-y-8 pb-12" id="contact">
      <Reveal>
        <SectionTitle lines={["LET'S WORK", "TOGETHER"]} />
      </Reveal>
      <Reveal delay={0.15}>
        <form action={handleSubmit} className="space-y-4 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              className="text-xs text-gray-500 light:text-gray-600 font-medium ml-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full bg-[#1A1A1A] light:bg-white border border-transparent light:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white light:text-black placeholder-gray-600 light:placeholder-gray-400 text-sm py-3 px-4 transition-shadow"
              id="name"
              name="name"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-xs text-gray-500 light:text-gray-600 font-medium ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-[#1A1A1A] light:bg-white border border-transparent light:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white light:text-black placeholder-gray-600 light:placeholder-gray-400 text-sm py-3 px-4 transition-shadow"
              id="email"
              name="email"
              placeholder="Your@email.com"
              type="email"
              required
            />
          </div>
        </div>
        <div className="space-y-1">
          <label
            className="text-xs text-gray-500 light:text-gray-600 font-medium ml-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full bg-[#1A1A1A] light:bg-white border border-transparent light:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white light:text-black placeholder-gray-600 light:placeholder-gray-400 text-sm py-3 px-4 resize-y transition-shadow"
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
        </div>
        
        {submitStatus && (
          <div className={`p-3 rounded-lg text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        </form>
      </Reveal>
    </section>
  );
}
