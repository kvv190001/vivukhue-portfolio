import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section className="space-y-8 pb-12" id="contact">
      <Reveal>
        <SectionTitle lines={["LET'S WORK", "TOGETHER"]} />
      </Reveal>
      <Reveal delay={0.15}>
        <form className="space-y-4 max-w-2xl">
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
              placeholder="Your Name"
              type="text"
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
              placeholder="Your@email.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label
            className="text-xs text-gray-500 light:text-gray-600 font-medium ml-1"
            htmlFor="budget"
          >
            Budget
          </label>
          <div className="relative">
            <select
              className="w-full bg-[#1A1A1A] light:bg-white border border-transparent light:border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white light:text-black invalid:text-gray-600 light:invalid:text-gray-400 text-sm py-3 px-4 appearance-none transition-shadow"
              id="budget"
              defaultValue=""
              required
            >
              <option disabled value="">
                Select...
              </option>
              <option value="small">&lt; $5k</option>
              <option value="medium">$5k - $10k</option>
              <option value="large">&gt; $10k</option>
            </select>
            <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none" />
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
            placeholder="Message"
            rows={4}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors mt-4"
          type="button"
        >
          Submit
        </button>
        </form>
      </Reveal>
    </section>
  );
}
