import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { solicitacoesData, role } from "@/lib/data";
import Image from "next/image";

type Solicitacao = {
  id: number;
  titulo: string;
  empresa: string;
  dataSolicitacao: string;
  horarioInicio: string;
  horarioFim: string;
};

const columns = [
  {
    header: "Titulo",
    accessor: "title",
  },
  { 
    header: "Empresa", 
    accessor: "empresa" 
  },
  {
    header: "Data",
    accessor: "dataSolicitacao",
    className: "hidden md:table-cell",
  },
  {
    header: "Início",
    accessor: "horarioInicio",
    className: "hidden md:table-cell",
  },
  {
    header: "Término",
    accessor: "horarioFim",
    className: "hidden md:table-cell",
  },
  {
    header: "Ações",
    accessor: "action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Solicitacao) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.titulo}</td>
      <td>{item.empresa}</td>
      <td className="hidden md:table-cell">{item.dataSolicitacao}</td>
      <td className="hidden md:table-cell">{item.horarioInicio}</td>
      <td className="hidden md:table-cell">{item.horarioFim}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Todos os eventos</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="event" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={solicitacoesData} />
      <Pagination />
    </div>
  );
};

export default EventListPage;
