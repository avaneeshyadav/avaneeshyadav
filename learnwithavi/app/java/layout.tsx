import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function JavaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 max-w-5xl">
          {children}
        </main>
      </div>
    </div>
  );
}
