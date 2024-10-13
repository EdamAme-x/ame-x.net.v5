import { cn } from "@/lib/utils";

export function RichText({
    children,
    className
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return <span className={cn("bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 bg-clip-text text-transparent", className)}>{children}</span>;
}