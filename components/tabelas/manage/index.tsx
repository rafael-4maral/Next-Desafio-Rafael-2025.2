import Link from 'next/link';
import { DeleteButton, EditButton } from '../botoes';
import { Edit } from 'lucide-react';

export default function ManageProductTable() {
  return (
    <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4">
      <div className="flex items-center w-full justify-between">
        <span className="text-base self-end text-gray-700">
          99 produtos encontrados...
        </span>
        <Link href='/admin/manage/create'>
          <button className="py-2 px-6 w-52 border-2 rounded-md text-white bg-sky-800 transition-all duration-700 hover:bg-sky-700">
            + Criar Produto
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-base text-left">
          <thead className="uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                Data da Publicação
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-6 font-medium">
                1
              </th>
              <th scope="row" className="px-6 py-6 font-medium">
                Nome
              </th>
              <th scope="row" className="px-6 py-6 font-medium">
                <span className="hover:underline">
                  R$ 50,00
                </span>
              </th>
              <th scope="row" className="px-6 py-6 font-medium">
                <span className="hover:underline">
                  20/10/2023
                </span>
              </th>
              <th className="px-6 py-6 flex items-center gap-4">

                <EditButton id={1} />
                <DeleteButton id={1} />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}