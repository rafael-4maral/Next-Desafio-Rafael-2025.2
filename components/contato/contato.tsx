"use client";


export default function SobrePage() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-yellow-100 min-h-screen flex flex-col">


      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-6">Nossa História</h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-xl text-justify">
          Desde a primeira página virada, soubemos que nossa missão ia além de simplesmente vender livros. A MyLibrary nasceu do amor incondicional pelas histórias e da crença inabalável no poder transformador da leitura. Não somos apenas um ponto de venda; somos um ponto de encontro para mentes curiosas, sonhadores e todos aqueles que buscam aventura, conhecimento e inspiração entre as capas.

        </p>
        <p className="text-gray-700 leading-relaxed mb-4 text-xl text-justify">
         Tudo começou com uma pequena coleção pessoal e um desejo ardente de compartilhar essa magia. Percebemos que cada livro é uma porta, uma janela e, às vezes, um espelho. Nossos fundadores – leitores vorazes como você – dedicaram-se a curar um acervo que reflete a diversidade do pensamento humano, abrangendo desde os clássicos atemporais até as vozes mais frescas da literatura contemporânea.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Contato</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            type="text"
            placeholder="Nome"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-100"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Empresa"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-100"
          />
          <textarea
            placeholder="Mensagem"
            rows={5}
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-100"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 w-full py-2 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600 transition"
          >
            Enviar
          </button>
        </form>
      </section>

    </div>
  );
}
