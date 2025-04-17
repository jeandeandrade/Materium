import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  updatesData,
  role,
} from "@/lib/data";
import Image from "next/image";

type UpdateItem = {
  id: number;
  title: string;
  segment: string;
  category: string;
  date: string;
};

const columns = [
  {
    header: "Título",
    accessor: "title",
  },
  {
    header: "Segmento",
    accessor: "segment",
  },
  {
    header: "Categoria",
    accessor: "category",
    className: "hidden md:table-cell",
  },
  {
    header: "Data",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Ações",
    accessor: "action",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item: UpdateItem) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.segment}</td>
      <td className="hidden md:table-cell">{item.category}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" || role === "teacher" && (
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
        Todas as tarefas
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" || role === "teacher" && <FormModal table="assignment" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={updatesData} />
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
