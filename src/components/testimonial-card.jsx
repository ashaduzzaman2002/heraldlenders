import { cn } from "../lib/utils";

export function TestimonialCard({ data, className }) {
  const Card = "div";

  return (
    <Card
      className={cn(
        "flex flex-col rounded-lg border-t border-[#37373E] text-white",
        "bg-gradient-to-b from-[#37373E]/50 to-[#37373E]/10",
        "p-4 text-start sm:p-6",
        "hover:from-[#37373E]/60 hover:to-[#37373E]/20",
        "w-full  h-full",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">{data.name}</h3>
          <p className="text-sm text-gray-400">{data?.designation}</p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm">
        {data.quote}
      </p>
    </Card>
  );
}
