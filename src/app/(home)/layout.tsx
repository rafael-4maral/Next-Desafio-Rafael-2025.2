import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
