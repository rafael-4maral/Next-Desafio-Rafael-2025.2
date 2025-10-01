import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full bg-gray-100 shadow-sm font-poppins">
      <div className="w-full px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/login" className="text-black hover:text-gray-600">
              Login
            </Link>
            <Link href="/produtos" className="text-black hover:text-gray-600">
              Produtos
            </Link>
            <Link href="/admin" className="text-black hover:text-gray-600">
              Gerenciamento
            </Link>
            <Link href="/contato" className="text-black hover:text-gray-600">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}