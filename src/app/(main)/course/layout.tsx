import InnerSidebar from "../../ui/inner-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row size-full max-h-full">
      <InnerSidebar />
      {children}
    </div>
  );
}
