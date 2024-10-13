import { cn } from "@/lib/utils";

export function BottomLuster({
  children,
  className,
  lusterClassName,
  effect = true
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  lusterClassName?: string;
  effect?: boolean;
}>) {
  return <div className={cn("relative w-full h-full", className)}>
    {children}
    <div
      className={cn(
        "insert-0 absolute inset-x-0 bottom-0 size-full",
        "[border-radius:calc(var(--radius)-2px)] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
        // transition
        "transform-gpu transition-all duration-300 ease-in-out",
        // on hover
        (
          effect ? [
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          ] : "pointer-events-none"
        ),
        lusterClassName
      )}
    />
    </div>
}
