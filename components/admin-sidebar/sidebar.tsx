'use client'

import { useState } from "react";
import { FlameKindling, Home, LayoutDashboard, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const linksSidebar = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/manage/produtos", label: "Produtos", icon: LayoutDashboard },
  { href: "/admin/manage/usuarios", label: "Usuários", icon: FlameKindling },
  { href: "/", label: "Página Inicial", icon: Home },
];

export default function AdminSidebar() {
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen);

  return (
    <div>
      <div className="bg-indigo-950 sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
        <div className="flex items-center gap-2 cursor-default">
          <Image
            src="/logo/logo.png"
            alt="Logo do blog"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-2xl text-white font-semibold">My Library</span>
        </div>
        <button
          className="w-8 h-8 text-white"
          onClick={toggleAdminSidebar}
        >
          ☰
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen bg-indigo-900  px-3 py-4 overflow-y-auto transition-transform 
        ${isAdminSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-default">
            <Image
              src="/imagens/logo.jpeg"
              alt="Logo do blog"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-2xl text-white font-semibold">My Library</span>
          </div>
          <button
            className="w-8 h-8 text-white sm:hidden"
            onClick={toggleAdminSidebar}
          >
            ✕
          </button>
        </div>

        <div className="h-[1px] w-full bg-gray-500 my-4"></div>

        <ul className="space-y-3">
          {linksSidebar.map(({ href, label, icon: Icon }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="flex items-center px-3 py-3 rounded-lg hover:bg-white/20 transition"
              >
                <Icon className="w-6 h-6 text-gray-400" />
                <span className="ms-3 text-xl text-white">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
