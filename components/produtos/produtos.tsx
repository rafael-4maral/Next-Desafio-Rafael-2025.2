"use client";

import { useState } from "react";
import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function ProdutosPage() {
  const produtos = [
    {
      id: 1,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp1.jpg",
    },
    {
      id: 2,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp6.jpg",
    },
    {
      id: 3,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp7.webp",
    },
    {
      id: 4,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp8.webp",
    },
    {
      id: 5,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp9.webp",
    },
    {
      id: 6,
      nome: "Harry Potter",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      preco: "R$ 50,00",
      imagem: "/imagens/hp10.webp",
    },


  ];

  return (
    <div className="bg-gradient-to-b from-pink-100 to-yellow-100 min-h-screen py-10 px-6">
 

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 ">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
        />
        <select className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white">
          <option>Categorias</option>
          <option>Fantasia</option>
          <option>Romance</option>
          <option>Aventura</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className=" shadow-2xl rounded-lg p-2 flex flex-col justify-between max-w-sm mx-auto h-full"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-64 object-contain rounded-t-lg"
            />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="text-xl font-bold">{produto.nome}</h3>
              <p className="text-gray-600 text-sm mt-2">{produto.descricao}</p>
            </div>
            
            <div className="flex justify-between items-center p-4">
                <p className="text-lg font-bold">{produto.preco}</p>
                <a href="#" className="text-sm text-pink-500 hover:underline">
                    Leia mais +
                </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        <button className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          &lt;
        </button>
        <button className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600">
          1
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          &gt;
        </button>
      </div>
      
    </div>
  );
}