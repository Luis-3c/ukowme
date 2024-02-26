import SideBar from "@/app/home/SideBar";
import Navbar from "../Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="px-6 lg:px-48 mt-10 flex flex-col-reverse sm:flex-row sm:space-x-8 items-start">
        <SideBar />
        <section className="w-full sm:flex-grow mb-10 sm:pl-2">
          {children}
        </section>
      </div>
    </>
  );
}
