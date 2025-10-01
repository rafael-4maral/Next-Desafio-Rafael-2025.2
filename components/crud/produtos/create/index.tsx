export default function CreateProduct() {
  return (
    <div className="w-full lg:w-9/12 2xl:w-7/12 p-4 border-2 rounded-md flex flex-col gap-6">
      <form className="flex flex-col gap-4" autoComplete="off">
        
        <div className="flex flex-col gap-1">
          <label>Nome do produto</label>
          <input
            className="border-2 p-2 rounded-md"
            name="create-produto-nome"
            placeholder="Nome"
            type="text" 
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <label>Preço</label>
          <input
            className="border-2 p-2 rounded-md"
            name="create-produto-preco"
            placeholder="0.00"
            type="number" 
            step="0.01" 
          />
        </div>

      
        <div className="flex flex-col gap-1">
          <label>Data de Lançamento</label>
          <input
            className="border-2 p-2 rounded-md"
            name="create-produto-data"
            type="date" 
          />
        </div>

        <div className="w-full flex justify-end">
          <button className="w-full lg:w-6/12 2xl:w-2/12 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-6 py-2">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}