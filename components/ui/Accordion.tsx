"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-hairline overflow-hidden rounded-panel border border-hairline bg-card">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-primary transition hover:bg-canvas-soft sm:px-6"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className={cn("shrink-0 transition", isOpen && "rotate-180")}
                size={18}
              />
            </button>
            <div
              id={`faq-${index}`}
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-body sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
