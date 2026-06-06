import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-ink-300 bg-white p-4 transition-all duration-300 hover:border-gold-500 hover:shadow-[0_6px_20px_rgba(27,19,32,0.03)] cursor-default",
        className,
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-1.5 flex flex-col justify-end">
        {icon}
        <div className="mt-2 mb-1 font-serif text-base font-bold text-plum-900">
          {title}
        </div>
        <div className="font-sans text-xs font-medium text-ink-700 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
