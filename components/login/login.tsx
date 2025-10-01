"use client";

import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex w-1/2">
        <img
          src="../imagens/1.jpg" 
          alt="Biblioteca"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gradient-to-b from-pink-100 to-yellow-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Entrar</h2>
          <p className="text-sm text-center mb-6">
            Não tem conta?{" "}
            <a href="/cadastro" className="text-blue-600 hover:underline">
              Cadastre-se
            </a>
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Insira o nome de usuário ou Email:
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">
              Insira a senha:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>

          <button className="w-full py-2 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-800 transition">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
