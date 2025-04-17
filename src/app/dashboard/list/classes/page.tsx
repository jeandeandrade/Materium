import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { departamentosData, role } from "@/lib/data";
import Image from "next/image";

type Departamento = {
  id: number;
  nome: string;
  capacidade: number;
  nivel: string;
  responsavel: string;
};

const columns = [
  {
    header: "Departamento",
    accessor: "nome",
  },
  {
    header: "Capacidade",
    accessor: "capacidade",
    className: "hidden md:table-cell",
  },
  {
    header: "Nível",
    accessor: "nivel",
    className: "hidden md:table-cell",
  },
  {
    header: "Responsável",
    accessor: "responsavel",
    className: "hidden md:table-cell",
  },
  {
    header: "Ações",
    accessor: "action",
  },
];

const ClassListPage = () => {
  const renderRow = (item: Departamento) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.nome}</td>
      <td className="hidden md:table-cell">{item.capacidade}</td>
      <td className="hidden md:table-cell">{item.nivel}</td>
      <td className="hidden md:table-cell">{item.responsavel}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={departamentosData} />
      <Pagination />
    </div>
  );
};

export default ClassListPage;
