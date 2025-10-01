"use client";

import { Calendar, Tag, BookOpen, User } from "lucide-react";

export default function ProdutoDetalhes() {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-pink-200 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-transparent rounded-lg p-8">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Harry Potter e o prisioneiro de Azkaban
        </h1>

        <p className="text-gray-800 text-justify leading-relaxed mb-8">
          No terceiro ano em Hogwarts, Harry descobre que um perigoso fugitivo 
          chamado Sirius Black escapou da prisão dos bruxos, Azkaban, e parece estar 
          atrás dele. Novas criaturas mágicas e feitiços são apresentados — incluindo 
          os Dementadores, criaturas sombrias que sugam a felicidade — cercam a escola. 
          Harry e seus amigos precisam lidar com mistérios do passado que envolvem sua 
          família. Entre novos professores intrigantes e mapas mágicos, Harry descobre 
          cada vez mais da verdade sobre quem realmente é o prisioneiro de Azkaban e qual 
          a ligação dele com sua própria história.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-600">Preço:</p>
              <p className="font-bold">R$ 50,00</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-600">Autor:</p>
              <p className="font-bold">Lorem Ipsum</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-600">Data de lançamento:</p>
              <p className="font-bold">07/07/2025</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-600">Páginas:</p>
              <p className="font-bold">386</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg ">
            <img
              src="/imagens/PA.webp"
              alt="Capa do livro Harry Potter e o prisioneiro de Azkaban"
              className="w-full h-64 object-contain"
            />
          </div>
          <div className="bg-white-300 rounded-lg overflow-hidden">
            <img
              src="/imagens/PA2.webp"
              alt="Livro físico Harry Potter e o prisioneiro de Azkaban"
              className="w-full h-64 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <button
            className="w-full sm:w-auto px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg 
                       hover:bg-pink-700 transition duration-300 transform hover:scale-[1.02]"
          >
            Comprar
          </button>
          
          <button
            className="w-full sm:w-auto px-8 py-3 border-2 border-pink-600 text-pink-600 text-lg font-semibold rounded-lg 
                       hover:bg-pink-50 transition duration-300 "
          >
            Adicionar aos favoritos
          </button>
        </div>


      </div>
    </div>
  );
}