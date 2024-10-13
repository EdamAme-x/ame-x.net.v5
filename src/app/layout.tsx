import "./globals.css";

export { metadata } from "@/config/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      // NOTE: ONLY DARK MODE
      className="dark" 
      lang="en"
    >
      <body
        // NOTE: USE INTER FONT
        className={"font-inter"}
      >
        {children}
      </body>
    </html>
  );
}
