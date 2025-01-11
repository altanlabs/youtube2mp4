"use client";
import { Accordion } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I convert a YouTube video to MP4?",
    answer: "Simply paste the YouTube URL into the input field on the homepage and click 'Convert to MP4'.",
  },
  {
    question: "Is the conversion service free?",
    answer: "Yes, our service is completely free to use.",
  },
  {
    question: "How long does the conversion take?",
    answer: "The conversion time depends on the length of the video, but it usually takes just a few minutes.",
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" title={faq.question}>
            <p className="text-gray-300">{faq.answer}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
