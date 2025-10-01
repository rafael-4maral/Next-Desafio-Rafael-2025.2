const user = 'Usuário default'

export default function EditUser() {
  return (
    <div className="w-full lg:w-9/12 2xl:w-7/12 p-4 border-2 rounded-md flex flex-col gap-6">
      <form className="flex flex-col gap-4" autoComplete="off">
        
        <div className="flex flex-col gap-1">
          <label>Nome do Usuário</label>
          <input
            className="border-2 p-2 rounded-md"
            name="edit-usuario-nome"
            placeholder="Nome"
            type="text" 
            defaultValue={user}
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="border-2 p-2 rounded-md"
            name="edit-usuario-email"
            placeholder="Email"
            type="text" 
            defaultValue={'usuario@default.com'}
          />
        </div>

        
        <div className="flex flex-col gap-1">
          <label>Data de Criação do Perfil</label>
          <input
            className="border-2 p-2 rounded-md"
            name="edit-usuario-data"
            type="date" 
            defaultValue={'2023-10-20'}
          />
        </div>

      
        <div className="w-full flex justify-end">
          <button className="w-full lg:w-6/12 2xl:w-2/12 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-6 py-2">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}