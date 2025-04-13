import { cn } from "../lib/utils";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsSection({ testimonials, className }) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:30px] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, repeatIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${repeatIndex}-${i}`}
                    data={testimonial}
                  />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#00040F] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#00040F] sm:block" />
        </div>
      </div>
    </section>
  );
}