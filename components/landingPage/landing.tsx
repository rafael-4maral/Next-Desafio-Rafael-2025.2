import Image from "next/image";
import Link from "next/link";
import { EyeIcon, HeartIcon, TagIcon } from '@heroicons/react/24/outline';
import { EarthIcon } from "lucide-react";

export default function LandingPage() {
  const imagens = ["HP1.jpg", "", "", "", ""]; 

  return (
    
    <div className="bg-[#FFFBEA]">

      <section className="w-full flex justify-center items-center bg-gray-200 h-[600px] relative">
        <img
          src="/imagens/6.jpg" 
          alt="Livro destaque"
          className="object-cover w-full h-full absolute top-0 left-0 opacity-70"
        />
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
            Sua próxima história começa aqui!
          </h1>
        </div>

      </section>
      
<section className="py-10 px-6 text-center">
  <h2 className="text-2xl font-bold mb-6">Novidades no catálogo:</h2>

  <div className="flex gap-6 justify-center flex-wrap">
    {imagens.map((imagem, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg w-60 overflow-hidden">
        {imagem ? (
          <img
            src={`/imagens/${imagem}`}
            alt={`Livro ${index + 1}`}
            className="w-full h-72 object-contain rounded-t-lg"
          />
        ) : (
          <div className="h-72 flex items-center justify-center bg-gray-100 text-gray-400 rounded-t-lg">
            Sem imagem
          </div>
        )}
        <div className="p-4">
          <p className="text-sm">Harry Potter – Opção {index + 1}</p>
          <p className="font-bold">R$ 40,00</p>
        </div>
      </div>
    ))}

  </div>
  <a
      href="/produtos" 
      className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition mt-8 inline-block"
    >
      Ver mais
    </a>
</section>



<section className="bg-pink-100 py-12">
  <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
 

    <div className="flex-1 text-center md:text-left md:pl-12">
      <h2 className="text-2xl font-bold mb-4">Sobre nós</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        Tudo começou em uma pequena sala cheia de livros. Entre amigos
        apaixonados por leitura, nasceu a ideia de criar um espaço
        encantado onde todos pudessem se sentir em casa. Acreditamos que
        os livros têm o poder de transformar, ensinar e conectar pessoas.
        Hoje, expandimos esse sonho e oferecemos uma seleção de obras para
        todos os gostos. Seja um leitor iniciante ou apaixonado de longa
        data, aqui você encontra um refúgio literário.
      </p>
    </div>

    <img
      src="/imagens/10.jpg"
      alt="Sobre nós"
      className="w-72 rounded-lg shadow-md mt-6 md:mt-0"
    />
  </div>
</section>


      <section className="py-12 px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-pink-100 rounded-xl shadow-2xl hover:shadow-xl p-8 text-center min-h-[350px] max-w-sm mx-auto justify-center items-center flex flex-col">
          <h3 className="font-bold text-2xl mb-4">Missão</h3>
          <p className="text-gray-700  text-lg leading-relaxed drop-shadow-sm">
            Tornar o acesso à leitura fácil, acessível e encantador, conectando
            leitores a histórias que transformam.
          </p>
           <EarthIcon className="h-8 w-8 mx-auto mt-6 text-gray-700" /> 
        </div>


         <div className="bg-pink-100 rounded-xl shadow-2xl p-8 text-center min-h-[350px] max-w-sm mx-auto justify-center items-center flex flex-col">
          <h3 className="font-bold text-2xl mb-4">Visão</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
             Ser a principal referência em livros no Brasil, oferecendo
           diversidade, qualidade e experiências únicas de leitura.
          </p>
           <EyeIcon className="h-8 w-8 mx-auto mt-6 text-gray-700" /> 
        </div>


        <div className="bg-pink-100 rounded-xl shadow-2xl p-8 text-center min-h-[350px] max-w-sm mx-auto justify-center items-center flex flex-col">
          <h3 className="font-bold text-2xl mb-4">Valores</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
           Acreditamos no poder transformador da leitura, no respeito às
            diferenças, na diversidade de histórias e na valorização de
            pessoas, vozes e culturas.
          </p>
           <TagIcon className="h-8 w-8 mx-auto mt-6 text-gray-700" />
        </div>


      </section>
    </div>
  );



}